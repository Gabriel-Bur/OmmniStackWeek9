const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//sessions
routes.post('/api/sessions', SessionController.store);

//spots
routes.post('/api/spots', upload.single('thumbnail') ,SpotController.store);
routes.get('/api/spots', SpotController.index);

//dashboard
routes.get('/api/dashboards', DashBoardController.show);

//booking
routes.post('/api/spots/:spot_id/bookings',BookingController.store);
module.exports = routes;