#include <stdio.h>
#include <time.h>

#include <array>
#include <iostream>
#include <memory>
#include <string>

class Board {
 private:
  std::array<std::array<std::string, 3>, 3> base_state = {
      {{"", "", ""}, {"", "", ""}, {"", "", ""}}};

  std::array<std::string, 2> possible_players = {"x", "o"};
  std::string current_player = "";
  std::array<std::array<std::string, 3>, 3> game_state = {};

  void reset_game_state() { game_state = base_state; }

  void choose_random_player() {
    size_t random_index = rand() % possible_players.size();
    current_player = possible_players[random_index];
  }

 public:
  Board() {
    reset_game_state();
    choose_random_player();
  }
};

int main() {
  srand(time(nullptr));
  std::unique_ptr<Board> board(new Board);
}