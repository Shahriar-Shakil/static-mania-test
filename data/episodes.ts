import { EpisodeListType } from './../ts/types';
import image1 from "../public/images/episodes/1.png"
import image2 from "../public/images/episodes/2.png"
import news1 from "../public/images/news/1.png"
import news2 from "../public/images/news/2.png"
import image3 from "../public/images/episodes/3.png"



let EpisodeData: EpisodeListType = [
    {
        id: 1,
        label: "Ep 1: How to build a world-class business brand",
        description: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
        logo: image1
    },
    {
        id: 2,
        label: "Ep 2: Getting the first 100 customers for your business",
        description: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
        logo: image2
    },
    {
        id: 3,
        label: "Ep 3: Should I raise money for my startup, or not?",
        description: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
        logo: image3
    }


]
let newsData: EpisodeListType = [
    {
        id: 1,
        label: "Getting the first 100 customers for your business",
        description: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
        logo: news1
    },
    {
        id: 2,
        label: "Apparently we had reached a great height in the atmosphere, ...",
        description: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
        logo: news2
    },



]
export { EpisodeData, newsData }