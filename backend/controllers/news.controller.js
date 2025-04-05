import News from "../models/news.model.js";

export const getNews = async (req,res) => {
    try{
        const news = await News.find({});
        res.status(200).json({ success: true, data: news });
    }
    catch (error) {
        console.error("Error in fetching news:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

export const createNews = async (req,res) => {
    const news = req.body; // user will send this data

    if(!news.headline || !news.author || !news.image || !news.content){
        return res.status(400).json({ success:false, message: "Please fill in all fields!"});
    }

    const newNews = new News(news)

    try{
        await newNews.save();
        res.status(201).json({ success: true, data: newNews});
    } catch(error) {
        console.error("Error in publishing news:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateNews = async (req, res) => {
    const { id } = req.params;

    const news = req.body; // all the data

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: `Invalid News ID: ${id}`});
    }
    try {
        const updatedNews = await News.findByIdAndUpdate(id, news,{new:true});
        res.status(200).json({ success: true, data: updatedNews});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }

};

export const deleteNews = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: `Invalid News ID: ${id}`});
    }
    
    try {
        await News.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: `News id: ${id} deleted.`
        });
    } catch (error) {
        console.error("Error in deleting news:", error.message);
        res.status(500).json({ success: false, message: "Server Error."});
       
    }
};