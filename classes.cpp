#include <iostream>

class Board {
 private:
  int someInt = 0;
  int anotherInt = 0;

 public:
  int total = 0;
  Board(int x) { total = someInt + anotherInt + x; };
};

int main() {
  Board b(5);
  std::cout << b.total << std::endl;
}