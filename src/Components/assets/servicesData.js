import f1_img from "./Sofa_repaire.jpg";
import f2_img from "./Old Vs New sofa.jpg";
import sales from "./wallpapers.jpg";  // ✅ Corrected the file extension
import bed_Heads from "./bed_headboards.jpg";
import blinds from "./blinds.jpg";
import curtains from "./curttons.jpg";

const servicesData = [
    {
        id: 1,
        name: "Sofa Repairing",
        image: f1_img,
        features: ["Repairing old sofas", "Polishing", "Fabric change"],
        description:"Premium Sofa Repair & Restoration Services,Give your old, worn-out sofa a new life with our expert sofa repair and restoration services! Whether it’s damaged upholstery, broken frames, sagging cushions, or faded fabric, we specialize in bringing back its original comfort and elegance."

    },
    
    {
        id: 3,
        name: "Wallpapers Sales",
        image: sales,  // ✅ Corrected import
        features: ["Quality products", "Best prices", "Warranty included"],
        description:"Transform your space with our exclusive collection of high-quality wallpapers! Whether you're looking for modern, classic, or customized designs, we have the perfect wallpaper to enhance your home or office."
    },
    {
        id: 4,
        name: "Bed_headboards Sales",
        image: bed_Heads,  // ✅ Corrected import
        features: ["Quality products", "Best prices", "Warranty included"],
        description:"Enhance your bedroom with our premium collection of stylish and comfortable bed headboards. Designed to add elegance and support, our headboards come in a variety of designs, colors, and materials to match your décor."
    },
    {
        id: 5,
        name: "Blinds Sales",
        image: blinds,  // ✅ Corrected import
        features: ["Quality products", "Best prices", "Warranty included"],
        description:"Upgrade your home or office with our premium quality blinds! We offer a wide range of modern, stylish, and durable blinds that enhance privacy, control sunlight, and elevate your interior décor."
    },
    {
        id: 6,
        name: "curtains Sales",
        image: curtains,  // ✅ Corrected import
        features: ["Quality products", "Best prices", "Warranty included"],
        description:"Enhance your living space with our luxurious and stylish curtains! We offer a wide range of premium-quality curtains that add beauty, privacy, and comfort to any room."
    },
];

export default servicesData;
