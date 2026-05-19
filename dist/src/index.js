import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT || "8080", 10);
const HOST = '0.0.0.0';
app.use(cors());
app.use(express.json());
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});
// Products endpoint (sementara)
app.get('/api/products', (req, res) => {
    res.json([]);
});
// Customers endpoint (sementara)
app.get('/api/customers', (req, res) => {
    res.json([]);
});
// Contracts endpoint (sementara)
app.get('/api/contracts', (req, res) => {
    res.json([]);
});
// Transactions endpoint (sementara)
app.get('/api/transactions', (req, res) => {
    res.json([]);
});
// Pos sessions endpoint
app.get('/api/pos-sessions', (req, res) => {
    res.json([]);
});
// Security stats endpoint
app.get('/api/security-stats', (req, res) => {
    res.json({ message: 'Security stats endpoint' });
});
// Audit logs endpoint
app.get('/api/audit-logs', (req, res) => {
    res.json([]);
});
app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT}`);
    console.log(`📡 Health check: http://${HOST}:${PORT}/health`);
});
