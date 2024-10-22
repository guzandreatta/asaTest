import fetch from 'node-fetch';

export default async (req, res) => {
  const { query, domain } = req.query;
  const API_KEY = process.env.CONSTRUCTOR_API_KEY;
  const API_BASE_URL = 'https://ac.cnstrc.com';
  
  const apiUrl = `${API_BASE_URL}/v1/intent/${encodeURIComponent(query)}?key=${API_KEY}&domain=${domain}&max_num_products_per_pod=3`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching search results' });
  }
};
