#include <stdio.h>
#include <time.h>

#include <iostream>
#include <memory>
#include <string>
#include <vector>

class Board {
 private:
  std::vector<std::vector<std::string>> base_state = {
      {{"x", "", ""}, {"", "", ""}, {"", "", "o"}}};

  std::vector<std::string> possible_players = {"x", "o"};
  std::string current_player = "";
  std::vector<std::vector<std::string>> game_state = {};

  void reset_game_state() { game_state = base_state; }

  void choose_random_player() {
    size_t random_index = rand() % possible_players.size();
    current_player = possible_players[random_index];
  }

  void draw() {
    for (auto& row : game_state) {
      for (size_t i = 0; i < row.size(); i++) {
        auto pos = row[i];
        printf("| %s ", pos.length() == 1 ? pos.c_str() : " ");
        if (i == row.size() - 1) {
          printf("|\n");
        }
      }
    }
  }

 public:
  Board() {
    reset_game_state();
    choose_random_player();
    draw();
  }
};

int main() {
  srand(time(nullptr));
  std::unique_ptr<Board> board(new Board);
}