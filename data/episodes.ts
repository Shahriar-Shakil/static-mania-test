import { EpisodeListType } from './../ts/types';
import image1 from "../public/images/episodes/1.png"
import image2 from "../public/images/episodes/2.png"
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
export { EpisodeData }