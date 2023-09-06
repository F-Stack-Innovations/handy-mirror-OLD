/**
 * =======================================================================
 * Dépendances (modules)
 * =======================================================================
 */
const router = require('express').Router();

/**
 * =======================================================================
 * Import différentes routes
 * =======================================================================
 */
const BaseRoutes = require('./base.v1.routes');

/**
 * =======================================================================
 * Base
 * =======================================================================
 */
router.use(BaseRoutes);

/**
 * =======================================================================
 * Exports
 * =======================================================================
 */
module.exports = router;
