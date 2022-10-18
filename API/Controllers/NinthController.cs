using API.Data;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NinthController : ControllerBase
{
    private readonly DataContext context;

    public NinthController(DataContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<NinthResult>>> GetResults()
    {
        var results = await context.NinthResults.ToListAsync();
        return results;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<NinthResult>> GetResults(int id)
    {
        var results = await context.NinthResults.ToListAsync();
        return results.Find(r => r.Id == id);
    }

    [HttpPost]
    public async Task<ActionResult<NinthResult>> AddResult(NinthDTO dto)
    {
        // TODO: Start using automapper
        var result = new NinthResult
        {
            Player1Name = dto.Player1Name,
            Player1Army = dto.Player1Army,
            Player1Score = dto.Player1Score,
            Player2Name = dto.Player2Name,
            Player2Army = dto.Player2Army,
            Player2Score = dto.Player2Score,
            NumberOfRounds = dto.NumberOfRounds,
            Description = dto.Description
        };
        context.NinthResults.Add(result);

        if (await context.SaveChangesAsync() > 0) return result;
        return BadRequest();
    }
}