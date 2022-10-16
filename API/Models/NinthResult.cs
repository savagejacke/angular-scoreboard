namespace API.Models;

public class NinthResult
{
    public int Id { get; set; }
    public string Player1Name { get; set; }
    public string Player1Army { get; set; }
    public int Player1Score { get; set; }
    public string Player2Name { get; set; }
    public string Player2Army { get; set; }
    public int Player2Score { get; set; }
    public int NumberOfRounds { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;
}
