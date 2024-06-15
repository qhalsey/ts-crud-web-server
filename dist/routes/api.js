"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
const API_BASE_URL = "https://jsonplaceholder.typicode.com";
// Create (POST)
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios_1.default.post(`${API_BASE_URL}/users`, req.body);
        res.status(response.status).json(response.data);
    }
    catch (error) {
        res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error.message });
    }
}));
// Read (GET)
router.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const response = yield axios_1.default.get(`${API_BASE_URL}/users/${req.params.id}`);
        res.status(response.status).json(response.data);
    }
    catch (error) {
        res.status(((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) || 500).json({ error: error.message });
    }
}));
// Update (PUT)
router.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const response = yield axios_1.default.put(`${API_BASE_URL}/users/${req.params.id}`, req.body);
        res.status(response.status).json(response.data);
    }
    catch (error) {
        res.status(((_c = error.response) === null || _c === void 0 ? void 0 : _c.status) || 500).json({ error: error.message });
    }
}));
// Delete (DELETE)
router.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const response = yield axios_1.default.delete(`${API_BASE_URL}/users/${req.params.id}`);
        res.status(response.status).json(response.data);
    }
    catch (error) {
        res.status(((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) || 500).json({ error: error.message });
    }
}));
exports.default = router;
