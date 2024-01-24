const Alumni = () => {
    const companies = [
        {
            name: "accenture",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/1uk3056-accenture-logo-2019_1000000000000000000028.png",
        },
        {
            name: "amwell",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/txj8bb-amwell_1000000000000000000028.png",
        },
        {
            name: "chase",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/1pxfjbx-jpmorgan_1000000000000000000028.png",
        },
        {
            name: "cvs",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/1k6ayih-cvs_1000000000000000000028.png",
        },
        {
            name: "fifthThird",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/1fcs021-fifth-third-bank_1000000000000000000028.png",
        },
        {
            name: "FannieMae",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/1vratsb-fannie_1000000000000000000028.png",
        },
        {
            name: "jebwa",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/201n40-jebwa_1000000000000000000028.png",
        },
        {
            name: "maximus",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/ld7s1r-maximus_1000000000000000000028.png",
        },
        {
            name: "nih",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/e4b493d2-us-nih-nidcr-logo_103c01w000000000000028.png",
        },
        {
            name: "deutscheBank",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/52060c7e-deutsche-bank_102q02c00000000000001o.jpg",
        },
        {
            name: "mednax",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/e3cb60fd-mednax_103n011000000000000028.png",
        },
        {
            name: "prudential",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/2d1c4c0e-download_104k00z000000000000028.png",
        },
        {
            name: "microsoft",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/4a5bf4c3-microsoft-logo-png-transparent_103200s000000000000028.png",
        },
        {
            name: "lpl",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/4cce85f7-lpl_105j00q000000000000028.png",
        },
        {
            name: "edwardJones",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/587ed5ec-edward-jones_103c00x000000000000028.png",
        },
        {
            name: "spacelabs",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/e33c0076-spacelabs500x300_102y01s000000000000000.jpg",
        },
        {
            name: "uspto",
            imgLink:
                "https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/08183847-uspto-logo-rgb-stacked-1200px_102u01h000000000000028.png",
        },
    ];

    return (
        <div className="w-full h-screen px-8 my-[360px] md:my-0 " name="alumni">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full text-center py-8">
                    <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue">
                        Where{" "}
                        <span className="underline decoration-c-orange">
                            our alumni
                        </span>{" "}
                        work
                    </h2>
                </div>
                <div className="flex lg:max-w-[1020px] items-center flex-wrap gap-4 md:gap-6 justify-center">
                    {companies.map((eaCom) => (
                        <img
                            className="max-h-[48px] md:max-h-none"
                            src={eaCom.imgLink}
                            alt="company-logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Alumni;
