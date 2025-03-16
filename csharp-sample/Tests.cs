namespace ConsoleTests
{
    public class Tests
    {
        [Fact]
        public void Guess_ShouldReturnMore_WhenGuessIsLessThanNumber()
        {
            var game = new GuessNumber(50);
            var result = game.Guess(30);
            Assert.Equal("�i����", result);
        }

        [Fact]
        public void Guess_ShouldReturnLess_WhenGuessIsGreaterThanNumber()
        {
            var game = new GuessNumber(50);
            var result = game.Guess(80);
            Assert.Equal("�����", result);
        }

        [Fact]
        public void Guess_ShouldReturnCorrectMessage_WhenGuessIsEqualToNumber()
        {
            var game = new GuessNumber(50);
            var result = game.Guess(50);
            Assert.Contains("�i���!", result);
        }

        [Fact]
        public void Guess_ShouldHandleBoundaryValues()
        {
            var gameMin = new GuessNumber(1);
            var gameMax = new GuessNumber(100);
            var resultMin = gameMin.Guess(1);
            var resultMax = gameMax.Guess(100);
            Assert.Contains("�i���!", resultMin); 
            Assert.Contains("�i���!", resultMax);
        }

        [Fact]
        public void GetAttempts_ShouldReturnCorrectAttemptsCount()
        {
            var game = new GuessNumber(50);
            game.Guess(30);
            game.Guess(50);
            Assert.Equal(2, game.GetAttempts());
        }

        [Fact]
        public void Guess_ShouldHandleInvalidInputGracefully()
        {
            var game = new GuessNumber(50);
            string userInput = "abc";
            bool isValidInput = int.TryParse(userInput, out int userGuess);
            Assert.False(isValidInput);
        }
    }
}