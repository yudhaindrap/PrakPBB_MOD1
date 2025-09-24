import { MedicationModel } from "../models/medicationModel.js";
import { supabase } from "../config/supabaseClient.js"; // perlu ditambahkan

export const MedicationController = {
  // GET all with search & pagination
  async getAll(req, res) {
    try {
      const { name, page = 1, limit = 10 } = req.query;

      let query = supabase.from("medications").select(
        "id, sku, name, description, price, quantity, category_id, supplier_id"
      );

      // Searching by name
      if (name) {
        query = query.ilike("name", `%${name}%`);
      }

      // Pagination
      const offset = (page - 1) * limit;
      query = query.range(offset, offset + limit - 1);

      const { data, error } = await query;

      if (error) throw error;
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // GET by ID
  async getById(req, res) {
    try {
      const med = await MedicationModel.getById(req.params.id);
      res.json(med);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  // CREATE with validation
  async create(req, res) {
    try {
      const { quantity, price } = req.body;

      if (quantity < 0 || price < 0) {
        return res
          .status(400)
          .json({ error: "Quantity and price must be >= 0" });
      }

      const med = await MedicationModel.create(req.body);
      res.status(201).json(med);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // UPDATE with validation
  async update(req, res) {
    try {
      const { quantity, price } = req.body;

      if (quantity < 0 || price < 0) {
        return res
          .status(400)
          .json({ error: "Quantity and price must be >= 0" });
      }

      const med = await MedicationModel.update(req.params.id, req.body);
      res.json(med);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // DELETE
  async remove(req, res) {
    try {
      await MedicationModel.remove(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
