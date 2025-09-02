import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // OMDB API proxy to avoid CORS issues
  app.get('/api/movie/:imdbId', async (req, res) => {
    try {
      const { imdbId } = req.params;
      const apiKey = process.env.OMDB_API_KEY || 'd2132124';
      const omdbUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
      
      const response = await fetch(omdbUrl);
      const data = await response.json();
      
      if (data.Response === 'True') {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Movie not found', message: data.Error });
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
