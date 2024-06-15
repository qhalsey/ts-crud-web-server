import express from "express";
import axios from "axios";

const router = express.Router();

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Create (POST)
router.post('/users', async (req, res) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, req.body);
        res.status(response.status).json(response.data);
    }catch(error){
        res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
})

// Read (GET)
router.get('/users/:id', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${req.params.id}`);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
  });
  
  // Update (PUT)
  router.put('/users/:id', async (req, res) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${req.params.id}`, req.body);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
  });
  
  // Delete (DELETE)
  router.delete('/users/:id', async (req, res) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/users/${req.params.id}`);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status((error as any).response?.status || 500).json({ error: (error as any).message });
    }
  });
  
  export default router;