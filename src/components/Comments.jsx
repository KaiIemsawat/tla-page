import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Comments = () => {
    // SwiperCore.use([Navigation]);

    const comments = [
        {
            commenter: "Yuwatida Samkoompin",
            comment:
                "Great experience that I have  Great opportunity to study here . The instructor  always helping us to understand  every single topic  I am so glade that I am the one of student here.",
        },
        {
            commenter: "Bekkhan Baiyshev",
            comment:
                "Change the course of your life by trusting them. These guys will support you until you find a job. Thank you Tech Lead Academy",
        },
        {
            commenter: "Ana Ana",
            comment:
                "Met so many wonderful people while learning some of the on-demand programming languages, tools, and the techniques. Curriculum was very well-structured. Teachers were so organized, kind, and knowledgable of their subjects/fields. What made my experience with TLA unique was our teachers and mentors' commitment to our success....",
        },
        {
            commenter: "Yulduz Akabirova",
            comment:
                "Great school to learn programming. Teachers are very professional and always willing to share their knowledge. High quality teaching and affordable price.I'm very happy that I studied here. Confidently recommend this school for those who want to learn programming and improve themselves.Environment is very positive and motivating. Teachers have great communication skills.",
        },
        {
            commenter: "Eve Vidaurre",
            comment:
                "I highly recommend Tech Lead Academy for anyone who is interested in learning how to code. For me this school has granted me a new career. I decided to enroll in their 6 month program and it has been one of the best decisions I could take to better my future. The TLA team is so knowledgeable, patient and kind. They offer after office hours and have a great space for students who want to study in school....",
        },
        {
            commenter: "Ahmet Adali",
            comment:
                "I took online because I live in another state and it was wonderful but gotta tell ya that would be more wonderful if it was in-class cuz these people are amazing! Teachers are the teachers that a person would ever wanna have. No matter what level you are in programming, you can be a starter knowing nothing, this is the place you can start. No worries, these perfect teachers will be always there whenever you need sth.  Thx a lot tech  lead academy and it's valuable teachers :)",
        },
        {
            commenter: "Ana Luchenkova",
            comment:
                "Best place to start leaning QA! Very professional and friendly team. For short time and good price you can get a chance to start a new career. Kuba, Beknazar and Alex are very awesome teachers! Thank you Tech Lead Academy!",
        },
    ];

    return (
        <div>
            {comments.map((eaComment) => (
                <div key={eaComment.commenter}>
                    <div>
                        <p>""</p>
                    </div>
                    <div>
                        <p>{eaComment.comment}</p>
                        <h3>{eaComment.commenter}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Comments;
