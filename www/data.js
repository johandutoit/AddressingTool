﻿

var class1items = [[1, 'Agriculture'], [5, 'Business'], [7, 'Community Facilities'], [3, 'Conservation'], [2, 'Forestry'], [6, 'Industrial'], [11, 'Mining '], [4, 'Residential'], [8, 'Sports & Recreation'], [10, 'Transportation'], [9, 'Utilities'], [12, 'Warehousing, Storage, & Distribution']];
var class2items = [[52, 11, 'Active Mining'], [31, 7, 'Administrative Facilities'], [3, 1, 'Agricultural Infrastructure'], [6, 2, 'Agroforestry'], [49, 10, 'Alternative Transportation'], [32, 7, 'Animal Care Facilities '], [2, 1, 'Animal Production'], [47, 10, 'Aviation'], [10, 3, 'Conservation Areas'], [1, 1, 'Crop Production'], [27, 7, 'Cultural Facilities '], [15, 4, 'Dispersed Residential'], [53, 11, 'Disposal of Mining Materials'], [5, 2, 'Domestic Forest Use'], [29, 7, 'Educational Facilities'], [43, 9, 'Electricity Network'], [18, 5, 'Financial Services'], [28, 7, 'Forest Cultural/Spiritual Use/Indigenous Forest'], [8, 2, 'Forest Environmental Protection'], [38, 8, 'Forest Recreation & Tourism'], [7, 2, 'Forestry Research and Education'], [35, 8, 'Hospitality Industry'], [26, 7, 'Institutional Care Facility'], [50, 10, 'Intermodal Terminals'], [48, 10, 'Marine'], [25, 7, 'Medical and Health Care Services '], [54, 11, 'Mining Rehabilitation areas'], [21, 5, 'Motor Vehicle Related Business'], [12, 4, 'Multiple Residential'], [13, 4, 'Multiple Residential'], [23, 6, 'Noxious Industry'], [17, 5, 'Offices'], [37, 8, 'Open Space'], [19, 5, 'Personal Services'], [34, 8, 'Place of Amusement'], [33, 8, 'Place of Refreshment'], [22, 6, 'Production and Manufacturing'], [4, 2, 'Production Forestry'], [9, 3, 'Protected Areas'], [30, 7, 'Protection Services'], [46, 10, 'Rail networks'], [51, 11, 'Reconnaissance'], [44, 9, 'Renewable Energy'], [20, 5, 'Retail'], [45, 10, 'Road Infrastructure'], [40, 9, 'Sanitation Network'], [24, 6, 'Service related industry'], [14, 4, 'Single Residential'], [41, 9, 'Solid Waste'], [36, 8, 'Sport'], [42, 9, 'Telecommunication'], [11, 4, 'Transient Formal Residential'], [16, 4, 'Transitional Residential Settlement Area'], [55, 12, 'Warehousing and Storage '], [56, 12, 'Warehousing and Storage '], [39, 9, 'Water Network']];
var class3items = [[291, 55, 'Above ground storage tanks '], [201, 37, 'Active Parks'], [30, 3, 'Administrative'], [78, 9, 'Admiralty reserve'], [193, 34, 'Adult entertainment'], [259, 47, 'Aerodrome'], [172, 29, 'After-school centres'], [295, 55, 'Agricultural related storage'], [43, 6, 'Agrisilviculture'], [45, 6, 'Agrosilvopastoral systems'], [261, 47, 'Airfield / runway'], [263, 47, 'Airports'], [61, 8, 'Amenity forestry'], [189, 34, 'Amusement, theme parks, show grounds'], [186, 32, 'Animal rehabilitation facilities'], [52, 7, 'Arboretum'], [55, 7, 'Area of special interest'], [81, 10, 'Areas under stewardship agreement'], [111, 18, 'ATM (Automatic teller machine) '], [298, 56, 'Auction houses or yards'], [110, 18, 'Banks'], [97, 12, 'Barracks'], [204, 37, 'Beaches'], [1, 1, 'Berries'], [2, 1, 'Beverage crops'], [238, 44, 'Biofuel, bio-power and bio-products'], [79, 10, 'Biosphere reserve'], [92, 12, 'Block of flats/ block of tenements'], [212, 39, 'Boreholes'], [83, 10, 'Botanical garden'], [286, 52, 'Brick making '], [250, 45, 'Bridge '], [113, 18, 'Building societies'], [213, 39, 'Bulk water mains'], [162, 28, 'Burial site'], [251, 45, 'Bus or taxi terminus'], [273, 49, 'Cable cars'], [18, 2, 'Camelids'], [139, 21, 'Car wash'], [91, 11, 'Caravan park / camping Site'], [60, 8, 'Carbon forest area'], [271, 49, 'Cartage'], [194, 34, 'Casino or gambling establishment'], [48, 7, 'Catchment monitoring sites'], [19, 2, 'Cattle'], [228, 42, 'Cellular base station'], [146, 23, 'Chemical manufacturing'], [154, 25, 'Chemist and pharmacy'], [3, 1, 'Citrus orchards'], [152, 25, 'Clinic'], [35, 4, 'Commercial biofuels production'], [34, 4, 'Commercial charcoal production'], [33, 4, 'Commercial fuel wood production'], [36, 4, 'Commercial production  / harvesting of non-timber forest products'], [266, 48, 'Commercial shipping ports'], [32, 4, 'Commercial timber production'], [166, 28, 'Communal/headman\'s forest'], [94, 12, 'Commune/boarding house'], [160, 27, 'Community centres'], [235, 44, 'Concentrated solar power'], [120, 19, 'Confectionary/bakery/catering'], [195, 35, 'Conference centre'], [57, 8, 'Controlled forest area'], [270, 49, 'Conveyer belts'], [177, 30, 'Correctional services '], [272, 49, 'Courier services'], [20, 2, 'Crocodiles'], [214, 39, 'Dams and weirs'], [296, 56, 'Distribution '], [297, 56, 'Distribution depot'], [90, 11, 'Dormitories/backpackers'], [119, 19, 'Dress-making / tailoring'], [187, 33, 'Drinking establishment'], [126, 19, 'Dry cleaners '], [99, 14, 'Dwelling house'], [231, 43, 'Electricity power station'], [179, 30, 'Emergency services '], [121, 19, 'Engraving'], [21, 2, 'Equine'], [276, 51, 'Exploration'], [53, 7, 'Facilities for research and information'], [133, 20, 'Farm stall'], [95, 12, 'Farm worker accommodation'], [268, 48, 'Ferries'], [4, 1, 'Fibre and industrial'], [112, 18, 'Financiers'], [22, 2, 'Fisheries'], [59, 8, 'Flood attenuation area'], [5, 1, 'Flowers'], [140, 22, 'Food production '], [6, 1, 'Forage and planted pasture crops'], [210, 38, 'Forest adventure tourism'], [82, 10, 'Forest conservation'], [47, 7, 'Forest monitoring site'], [67, 9, 'Forest nature reserve '], [206, 38, 'Forest park'], [207, 38, 'Forest recreation areas'], [63, 8, 'Forest rehabilitation area'], [64, 8, 'Forest restoration area'], [211, 38, 'Forest tourism associated with natural features'], [209, 38, 'Forest trails'], [72, 9, 'Forest wilderness area'], [49, 7, 'Forestry demonstration site'], [46, 7, 'Forestry research trial'], [54, 7, 'Forestry training facility'], [253, 45, 'Fright hubs'], [7, 1, 'Fruit orchards'], [156, 25, 'Funeral and internment services '], [127, 19, 'Funeral parlour'], [23, 2, 'Game'], [68, 9, 'Game reserves'], [132, 20, 'Garden centre/plant nursery'], [24, 2, 'Goats'], [8, 1, 'Grain crops'], [100, 14, 'Granny flat/ garden cottage/ domestic residential quarters'], [93, 12, 'Group housing (including townhouses, clusters, simplexes and duplexes) '], [86, 11, 'Guest houses/ bed and breakfast establishments/ lodging'], [116, 19, 'Hair and beauty salons'], [31, 3, 'Handling'], [262, 47, 'Hangers and storage'], [265, 48, 'Harbour'], [40, 5, 'Harvesting / production of firewood for domestic use'], [42, 5, 'Harvesting / production of non-timber forest products for domestic use'], [260, 47, 'Helistop/ heliport'], [9, 1, 'Herbs and spices'], [164, 28, 'Heritage/historical site'], [170, 29, 'Higher education institutions/tertiary educational'], [109, 17, 'Home Enterprise'], [104, 15, 'Homestead'], [151, 25, 'Hospital'], [96, 12, 'Hostels/residence'], [85, 11, 'Hotels'], [103, 15, 'House of the chief/komkhulu'], [183, 32, 'Indoor and outdoor kennels'], [198, 36, 'Indoor sports'], [294, 55, 'Indoor storage'], [134, 20, 'Informal trading/market/ street vending'], [117, 19, 'Instructional services '], [114, 18, 'Insurance brokers '], [247, 45, 'Interchange'], [300, 50, 'Intermodal Terminals'], [123, 19, 'Jewellery manufacturing'], [136, 20, 'Kiosk'], [65, 8, 'Land reclamation'], [280, 52, 'Landfill mining'], [225, 41, 'Landfill sites'], [128, 19, 'Launderettes'], [181, 31, 'Law courts'], [173, 29, 'Library'], [267, 48, 'Lighthouse'], [159, 26, 'Long term nursing facilities '], [141, 22, 'Machinery manufacturing '], [76, 9, 'Marine protected areas'], [153, 25, 'Medical consulting rooms'], [10, 1, 'Medicinal crops'], [11, 1, 'Melons'], [163, 28, 'Memorial tree'], [142, 22, 'Metal product manufacturing'], [287, 52, 'Mining infrastructure'], [301, 54, 'Mining Rehabilitation areas'], [101, 14, 'Mobile dwelling unit'], [138, 21, 'Motor dealership'], [137, 21, 'Motor showroom/ car sales lot'], [74, 9, 'Mountain catchment area'], [281, 52, 'Mountaintop removal'], [299, 13, 'Multiple Residential'], [38, 5, 'Multi-purpose use of natural trees for wood and non-wood forest products'], [37, 5, 'Multi-purpose woodlots for domestic use'], [182, 31, 'Municipal administrative building '], [175, 30, 'National defence force'], [80, 10, 'National park'], [192, 34, 'Night club / Dance hall /  Discotheque / Billiards (pool or snooker)'], [143, 22, 'Non-metal material production '], [12, 1, 'Nuts'], [147, 23, 'Oil and gas manufacturing '], [13, 1, 'Oil seeds crops'], [202, 37, 'Open space parks'], [277, 52, 'Open-pit mining'], [174, 29, 'Other educational services'], [199, 36, 'Outdoor sports area'], [292, 55, 'Outdoor storage'], [220, 40, 'Outfall sewers'], [243, 45, 'Parking  '], [254, 45, 'Parking '], [118, 19, 'Pet salon/parlour'], [234, 44, 'Photovoltaic power'], [208, 38, 'Picnic site'], [124, 19, 'Picture framing'], [25, 2, 'Pigs'], [269, 49, 'Pipelines/ gas lines '], [284, 52, 'Placer mining'], [62, 8, 'Plantation exit area under rehabilitation'], [176, 30, 'Police stations'], [180, 31, 'Post offices'], [26, 2, 'Poultry'], [233, 43, 'Power lines'], [240, 44, 'Power plant and heat pumps'], [168, 29, 'Pre-primary education'], [218, 39, 'Pressure-reducing valve stations'], [169, 29, 'Primary and secondary education'], [122, 19, 'Printing and publishing '], [178, 30, 'Private security'], [41, 5, 'Production of charcoal for domestic use'], [108, 17, 'Professional Suites'], [275, 51, 'Prospecting'], [70, 9, 'Protected environment'], [58, 8, 'Protected tree/s'], [71, 9, 'Protected woodlands'], [216, 39, 'Pump stations'], [278, 52, 'Quarrying'], [283, 52, 'Quarrying'], [149, 24, 'Quick vehicle servicing'], [27, 2, 'Rabbits'], [258, 46, 'Rail siding'], [257, 46, 'Rail track'], [256, 46, 'Rail yards'], [255, 46, 'Railway stations'], [28, 2, 'Ratites'], [161, 27, 'Religious centres'], [171, 29, 'Research and development institutions '], [217, 39, 'Reservoirs'], [87, 11, 'Residential clubs'], [105, 15, 'Residential on smallholding or farm NOT used for other purposes'], [288, 53, 'Residue deposit or stockpile'], [89, 11, 'Resort / Chalets (or bungalows)'], [188, 33, 'Restaurant'], [289, 53, 'Retention area'], [167, 28, 'Ritual site'], [264, 48, 'River ports'], [242, 45, 'Road networks '], [249, 45, 'Road reserve '], [102, 15, 'Royal Palace'], [165, 28, 'Sacred forest'], [282, 52, 'Sand mining'], [50, 7, 'Seed orchard / genetic reserve population'], [51, 7, 'Seed storage facility / genebank'], [88, 11, 'Self-catering establishments'], [106, 16, 'Self-help structures/Informal structures in backyard'], [107, 16, 'Self-help structures/Informal structures not in backyard'], [158, 26, 'Senior housing'], [125, 19, 'Servicing and repairs of domestic appliances'], [221, 40, 'Sewer pump stations'], [222, 40, 'Sewer reticulation'], [29, 2, 'Sheep'], [129, 20, 'Shopping centre/ mall'], [131, 20, 'Shops'], [44, 6, 'Silvopastoral systems'], [236, 44, 'Solar farms'], [196, 35, 'Spa'], [135, 20, 'Spaza shop'], [184, 32, 'SPCA'], [66, 9, 'Special nature reserve'], [73, 9, 'Specially protected forest areas'], [197, 36, 'Sports arena / stadium'], [200, 36, 'Sports club'], [203, 37, 'Squares'], [56, 8, 'State forest'], [115, 18, 'Stock exchanges'], [248, 45, 'Stormwater facilities'], [244, 45, 'Street furniture'], [279, 52, 'Strip mining '], [232, 43, 'Substations'], [14, 1, 'Sugar'], [130, 20, 'Supermarket'], [148, 23, 'Tannery'], [230, 42, 'Telecommunication centre'], [229, 42, 'Telecommunication lines'], [144, 22, 'Textile manufacturing '], [191, 34, 'Theatre or movie theatre'], [39, 5, 'Timber harvesting / production for domestic use'], [223, 40, 'Toilet facilities'], [245, 45, 'Toll customer centre/ toll booth '], [155, 25, 'Traditional healers '], [69, 9, 'Traditional heritage areas '], [84, 10, 'Trans-frontier park'], [15, 1, 'Tropical and subtropical'], [252, 45, 'Truck stops'], [285, 52, 'Underground mining'], [205, 37, 'Vacant land'], [16, 1, 'Vegetables'], [150, 24, 'Vehicle repairs centres '], [293, 55, 'Vehicle storage '], [185, 32, 'Veterinary care'], [17, 1, 'Viticulture'], [227, 41, 'Waste processing facilities'], [226, 41, 'Waste transfer stations'], [224, 40, 'Waste water treatment works'], [215, 39, 'Water distribution points'], [241, 44, 'Water power plants'], [219, 39, 'Water treatment works'], [246, 45, 'Weigh bridge '], [157, 26, 'Welfare facilities / charitable institution'], [77, 9, 'Wetlands'], [237, 44, 'Wind turbines'], [239, 44, 'Wind warm'], [145, 22, 'Wood products manufacturing '], [75, 9, 'World heritage Site'], [190, 34, 'Zoo or aquarium']];
