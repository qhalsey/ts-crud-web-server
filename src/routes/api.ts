import express from "express";
import axios from "axios";

const router = express.Router();

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Create (POST)
router.post('/items', async (req, res) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/items`, req.body);
        res.status(response.status).json(response.data);
    }catch(error){
        res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
})

// Read (GET)
router.get('/items/:id', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/items/${req.params.id}`);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
  });
  
  // Update (PUT)
  router.put('/items/:id', async (req, res) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/items/${req.params.id}`, req.body);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
  });
  
  // Delete (DELETE)
  router.delete('/items/:id', async (req, res) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/items/${req.params.id}`);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
  });
  
  export default router;