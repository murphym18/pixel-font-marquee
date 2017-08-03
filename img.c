#include <stdlib.h>
#include <stdio.h>

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

void makeImage(int first, int second, int third) {
  char name[6];
  sprintf(name, "%d%d%d.ppm", first, second, third);
  FILE *fp = fopen(name, "wb");
  const int dimx = 60, dimy = 180;
  (void) fprintf(fp, "P6\n%d %d\n255\n", dimx, dimy);
  drawBox(fp, first);
  drawBox(fp, second);
  drawBox(fp, third);
  (void) fclose(fp);
}

int main(void)
{
  makeImage(0,0,0);
  makeImage(0,0,1);
  makeImage(0,1,0);
  makeImage(0,1,1);
  makeImage(1,0,0);
  makeImage(1,0,1);
  makeImage(1,1,0);
  makeImage(1,1,1);

  // int i, j;
  // FILE *fp = fopen("first.ppm", "wb"); /* b - binary mode */

  // for (j = 0; j < dimy; ++j)
  // {
  //   for (i = 0; i < dimx; ++i)
  //   {
  //     static unsigned char color[3];
  //     color[0] = i % 256;  /* red */
  //     color[1] = j % 256;  /* green */
  //     color[2] = (i * j) % 256;  /* blue */
  //     (void) fwrite(color, 1, 3, fp);
  //   }
  // }
  return EXIT_SUCCESS;
}
