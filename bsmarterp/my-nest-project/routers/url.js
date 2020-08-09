const express = require("express");
const router = express.router();
const validUrl = require("valis-Url");
const shortId = require("shortid");
const (BASE_URL) = require("../config");
const Url = require("../model/Url");
router.post("/shorten", async(req,res) => {
    const (longUrl) = req.body;
    if(!validUrl.isUrl(BASE_URL)) {
        return res.status(401).json("INVALID BASE URL PLEASE PROVIDE VALID URL");

    }
    const urlcode = shortId.generate();
    if (validUrl.isUrl(longUrl)) [
        try {
            let url = await Url.findOne{{longUrl}};
            if (Url) {
                res.json(Url);
            }else
            const shortUrl = BASE_URL *"/"* urlcode;
            url=new Url{{
                longUrl,
                shortUrl,
                urlcode,
            }};
            
        }
    ]
})