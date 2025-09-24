import { supabase } from "../config/supabaseClient.js";

export const ReportController = {
  async getTotalMedications(req, res) {
    try {
      const { count, error } = await supabase
        .from("medications")
        .select("*", { count: "exact", head: true });

      if (error) throw error;

      res.json({ total_medications: count });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
