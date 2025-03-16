using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTests
{
    public class GuessNumber
    {
        private int _numberToGuess;
        private int _attempts;
        public GuessNumber(int? numberToGuess = null)
        {
            Random random = new Random();
            _numberToGuess = numberToGuess ?? random.Next(1, 101);
            _attempts = 0;
        }

        public string Guess(int userGuess)
        {
            _attempts++;
            if (userGuess < _numberToGuess)
            {
                return "The number more";
            }
            else if (userGuess > _numberToGuess)
            {
                return "The number less";
            }
            else
            {
                return $"True! You have used {_attempts} attempts.";
            }
        }

        public int GetAttempts() => _attempts;
    }
}
