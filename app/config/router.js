'use strict';

/**
 * Modules dependencies.
 * 
 */
 const express    =   require('express');


 const router     =   express.Router();
 const wallpaper    =   require('../controller/wallpaper');


 /**
  * Expose routes
  */

    //App creation Api
    router.get('/wallpaper',wallpaper.wallpaperList);
    router.get('/wallpaper/:id',wallpaper.wallpaperViewUpdate);
   
    module.exports = router;
