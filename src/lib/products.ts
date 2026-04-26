export type SubCategory = {
  title: string;
  items: string[];
};

export type Category = {
  slug: string;
  number: string;
  title: string;
  intro: string;
  image: string;
  subCategories: SubCategory[];
};

export const PRODUCT_CATEGORIES: Category[] = [
  {
    slug: "packing-materials",
    number: "01",
    title: "Packing Materials",
    image: "/packaging.png",
    intro:
      "Stretch wrap to strapping. The consumables that keep dispatch lines moving across Pune.",
    subCategories: [
      {
        title: "Stretch Films & Pallet Wraps",
        items: [
          "Hand-grade stretch wrap film (25–600 mm width, 23–25 micron)",
          "Machine-grade stretch wrap film (200–600 mm, 29 micron)",
        ],
      },
      {
        title: "Cushioning & Protective Packaging",
        items: [
          "Bubble roll, all GSM (1–3 m widths)",
          "PE foam roll, sheet & bags (1–100 mm, white & black)",
          "Thermocol — all sizes",
          "Edge board protection",
          "Sticking rubber & gaskets",
          "Sawdust & wooden packing material",
          "Mount cap",
          "Silica gel pouches (1 g – 1000 g)",
        ],
      },
      {
        title: "Adhesive Tapes",
        items: [
          "BOPP tape — TR / BR / colour, ½\" to 6\", printed or plain",
          "Floor marking tape — all colours, ½\" to 6\"",
          "Double-side tape — all sizes",
          "Insulation tape — all colours",
          "Masking & Abro tape — all sizes",
          "Teflon (PTFE) tape — all sizes",
          "Aluminium tape — all sizes & GSM",
        ],
      },
      {
        title: "Strapping Systems & Sealing Tools",
        items: [
          "Packing strip, 9–24 mm — manual & machine grade, Indian & imported",
          "Packing patti clips MS, 9–24 mm — with or without powder coating",
          "BOPP tape dispensers — 1\" to 6\" hand & table dispensers",
          "Strapping machines — MS & nylon, 9–24 mm, Indian & imported",
          "Seal wire & tag wire",
        ],
      },
      {
        title: "Industrial Bags, Sacks & Liners",
        items: [
          "PP / LD / HM bags — to specification",
          "Locking bags — all sizes & GSM",
          "Gunny cloth — plain & Dambari Kiltan",
          "Plastic paper — black & white",
        ],
      },
      {
        title: "Twines, Ties & Cable Management",
        items: [
          "Nylon sutali & jute sutali — all sizes",
          "Cable ties — black, white, high tension, SS",
          "Rubber bands — all sizes",
          "Heat shrink sleeves — speciality in colour, all mm",
        ],
      },
      {
        title: "Labels, Stickers & ID Marking",
        items: ["Radium reflective stickers"],
      },
      {
        title: "Industrial Wipes & Cleaning Cloth",
        items: ["Cotton chindhi — colour & white"],
      },
    ],
  },
  {
    slug: "safety-equipment",
    number: "02",
    title: "Safety Equipment & PPE",
    image: "/safety.png",
    intro:
      "ISI-marked, CE-approved, brand-genuine PPE. Indexed by body zone for quick procurement.",
    subCategories: [
      {
        title: "Head Protection",
        items: [
          "Ultra Udyogi safety helmet — ISI mark",
          "ROCKLITE safety helmet with ratchet belt",
          "Ultra Ratchet safety helmet",
          "JSP MK1 safety helmet — CE approved",
          "FRONTIER safety helmet — CE marked",
        ],
      },
      {
        title: "Eye & Face Protection",
        items: [
          "Hardy polycarbonate goggle — CE approved",
          "Starline / Sunlong polycarbonate goggle",
          "HURRICANE polycarbonate goggle",
          "3M chemical splash protective goggle",
          "Polycarbonate UD30 over-spectacles",
          "Punk goggles",
          "Udyogi UD81 polycarbonate goggle",
          "Grinding goggles with side shield",
          "Black lens goggle with side shield",
          "Toughened lens goggles — side shield & white frame",
          "German lens goggles 5-6 (original)",
          "Brow & chin face shield — A type",
          "Spring face shield for helmet",
          "Udyogi spring face shield for helmet",
          "Bouffant / surgeon head cap",
          "Disposable shoe covers — white & blue",
        ],
      },
      {
        title: "Hearing Protection",
        items: [
          "3M corded foam earplugs",
          "Ear seal earplug",
          "Udyogi ear muff",
          "Venus foam earplugs — ISI mark",
          "Frontier uncorded foam earplugs",
        ],
      },
      {
        title: "Respiratory Protection",
        items: [
          "Pleated dust masks — single, double, triple layer with nose clip",
          "Yellow PP mask",
          "Folding dust mask ISI V-44",
          "YD 88 folding mask",
          "FFP1 dust mask YD 820 with exhalation valve",
          "FFP2 dust mask YD 840 with exhalation valve",
          "Dust mask with valve & net — ISI V-90",
          "Dust mask with valve — ISI V-20",
          "Spray painting mask V-414 SLOV",
          "Welding fumes mask V-425 SLOV",
          "Folding mask FFP1 V-410 SLV",
          "PVC dust guard respirator",
          "3M 9004 (0.3 micron filter)",
          "3M 8710 (0.3 micron filter)",
          "Frontier FFP1 F21 / FFP2 F22 / FFP3 F23",
          "Venus V-7500 half-face piece respirator",
          "Spare cartridges",
        ],
      },
      {
        title: "Hand Protection",
        items: [
          "Rubber gloves — orange & white, 12\"–22\", light / heavy / extra thick",
          "Imported Super Nitrile 12\" — Surf Nitrile, Nova / Fathom, 18\" Surf nitrile",
          "Natural Neoprene & Neoprene gloves",
          "Maxilite Fresh nitrile coated, DPL nitrile yellow knit-wrist, PU coated",
          "Splendor rubber-coated — nylon and cotton",
          "PVC supported with cotton lining (12\"–22\") and unsupported embossed palm (12\"–18\")",
          "JYOT seamless latex shock-proof — 5kV to 33kV electrical",
          "Disposable polythene 14\" (min 1000 prs)",
          "Surgical with ISI mark, examination, and surgical fingers",
          "Leather 14\", yellow leather lined, Canadian split & chrome",
          "Asbestos Everest 14\" and S-20 quality",
          "Kevlar palm and full Kevlar with woolen lining",
          "Canvas 12\" medium quality",
          "Hosiery — with / without kali, single, double, knitted hand sleeves",
          "Cotton knitted, polka dotted single & double",
        ],
      },
      {
        title: "Foot Protection",
        items: [
          "Half gumboot 9\" — Sico",
          "Full gumboot 14\" — Sico",
          "Sico safety shoes with steel toe — PVC",
          "BLACK STEEL leather safety shoes — steel toe, PU sole, ISI approved",
          "Concorde leather safety shoes — steel toe, PU sole",
          "VAULTEX leather safety shoes — steel toe, PU sole",
          "FRONTIER green leather safety shoes — steel toe, PU sole",
        ],
      },
      {
        title: "Body Protection",
        items: [
          "PVC apron 24\" × 48\" / 52\" and 24\" × 36\"",
          "PVC coat-pant-hood set",
          "Tyvek Barrierman boiler suit",
          "Leather apron 24\" × 36\"",
          "Leather leg guard, leather hand sleeves",
          "Fluorescent jackets",
          "Disposable coverall (boiler suit)",
          "Disposable full sleeves apron",
          "Wind sock cloth",
        ],
      },
      {
        title: "Fall Protection",
        items: [
          "Full body harness — ISI mark",
          "Full body safety belt with scaffold hooks",
          "Safety net 4\"×4\"×4mm + 12mm + 10mm × 10mm HDP net",
          "Barricading tape — double side printing tubing",
        ],
      },
    ],
  },
  {
    slug: "finishing-chemicals",
    number: "03",
    title: "Finishing & Chemicals",
    image: "/finishing.png",
    intro:
      "Industrial chemicals, abrasives, filtration and workshop tools that finish what your customers see.",
    subCategories: [
      {
        title: "Industrial Chemicals & Acids",
        items: [
          "HCl acid",
          "Caustic soda",
          "Sodium hypochlorite",
          "Industrial-grade acids — to specification",
          "IPA (isopropyl alcohol)",
          "K2 pest",
          "Red Rabin",
          "Salt",
        ],
      },
      {
        title: "Paints, Solvents & Coatings",
        items: [
          "Anti-spatter spray",
          "Spray paint",
          "Oil paints — Asian Paints / Nerolac",
          "Thinner",
          "Cleaning wax",
        ],
      },
      {
        title: "Abrasives, Grinding & Polishing",
        items: [
          "HXO4 polish pad — roll & pad",
          "Grinding belt — any size",
          "Emery paper",
          "Polish wheel",
          "Scrubbing pad",
          "Flap wheel — all sizes & grades",
          "ARC belt",
          "SR 2000 Anupoal",
          "RMC roll — all sizes",
        ],
      },
      {
        title: "Filtration & Lab Consumables",
        items: [
          "Filter paper — all sizes",
          "Filter pad — all sizes",
          "Filter cartridge — 5 to 25 micron",
          "pH paper",
          "Surgical blade",
          "Syringes — 2 ml to 25 ml",
        ],
      },
      {
        title: "Industrial Tools & Workshop Consumables",
        items: [
          "Industrial brushes — all types",
          "Scissors",
          "Multitech cutter 010",
          "Flexible shaft — 1 m & 2 m",
          "Fuse wire SS — all GSM",
          "Heat shrink sleeves — industrial / electrical termination",
        ],
      },
      {
        title: "Hoses, Pipes & Tubing",
        items: [
          "PVC flexible pipe",
          "Rubber flexible pipe",
        ],
      },
      {
        title: "Industrial Furniture, Fans & Ladders",
        items: [
          "Industrial fans & coolers — Almonard",
          "Plastic chairs",
          "Hydraulic chairs",
          "Aluminium ladders",
          "Wooden ladders",
        ],
      },
      {
        title: "Boards, Signage & Glass Framing",
        items: [
          "White board",
          "Black board",
          "Aluminium notice board",
          "Magnetic board",
          "Glass framing work",
        ],
      },
    ],
  },
  {
    slug: "housekeeping",
    number: "04",
    title: "Housekeeping & Cleaning",
    image: "/housekeeping.png",
    intro:
      "The plant hygiene catalogue, restocked on the same purchase order as your packaging and safety.",
    subCategories: [
      {
        title: "Cleaning Chemicals & Detergents",
        items: [
          "Phenol — white & black",
          "Liquid soap — all types",
          "Bar soap — all types",
          "Colin / Harpic / Lizol",
          "Washing powders — all types",
        ],
      },
      {
        title: "Air Care & Pest Control",
        items: [
          "Room fresheners — all types",
          "Sani cubes — all grams",
          "Naphthalene balls",
        ],
      },
      {
        title: "Brooms, Brushes & Mops",
        items: [
          "Soft brooms & hard brooms",
          "Dry mops — all types",
          "Floor brushes — all types",
          "Floor wipers — all types",
          "Glass wipers (100 ft capacity)",
        ],
      },
      {
        title: "Scrubbing Pads & Dusters",
        items: [
          "Scotch-Brite, nylon, MS brite",
          "Cotton dusters — all types",
        ],
      },
      {
        title: "Bins, Buckets & Containers",
        items: [
          "Plastic & SS dustbins",
          "Garden dustbins — cartoon & animal",
          "Plastic buckets",
          "Plastic mugs",
        ],
      },
      {
        title: "Floor Mats & Entrance Care",
        items: ["Door mats — all types"],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug);
}
