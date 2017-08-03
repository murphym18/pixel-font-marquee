#include <stdlib.h>
#include <stdio.h>

#define ROWS 6
void drawBox(FILE *fp, unsigned char isWhite) {
  static unsigned char color[3];
  for (int y=0; y < 60; ++y) {
    for (int x=0; x < 60; ++x) {
      if (isWhite) {
         color[1] = 255;
         color[0] = 255;
         color[2] = 255;
      }
      else {
        color[1] = 0;
        color[0] = 0;
        color[2] = 0;

      }
      fwrite(color, 1, 3, fp);
    }
  }
}

void makeImageName(char *buff, int name) {
  for (int i=ROWS - 1; i >= 0; --i) {
    sprintf(buff + (ROWS - i - 1), "%d", name >> i & 1);
  }
  sprintf(buff + ROWS, ".ppm");
}

void makeImage(int vals) {
  char *name = calloc(ROWS + 5, 1);
  makeImageName(name, vals);
  printf("%s\n", name);
  FILE *fp = fopen(name, "wb");
  int width = 60;
  const int dimx = width, dimy = width*ROWS;
  (void) fprintf(fp, "P6\n%d %d\n255\n", dimx, dimy);
  for (int i=ROWS - 1; i >= 0; --i) {
    drawBox(fp, vals >> i & 1);
  }
  (void) fclose(fp);
}

int main(void)
{
  int max = 1 << ROWS;
  for (int i = 0; i < max; ++i) {
    makeImage(i);
  }
  return EXIT_SUCCESS;
}
