// Single source of truth for the site, transcribed from the CV dated September 29, 2026.

export const profile = {
  name: 'Aakash Tripathi',
  honorific: 'PhD',
  role: 'Generative and Multimodal AI Research Scientist',
  focus: 'Precision Oncology',
  organization: 'H. Lee Moffitt Cancer Center & Research Institute',
  organizationUrl: 'https://www.moffitt.org',
  location: 'Tampa, Florida, USA',
  summary:
    'Research on representation learning, foundation models, language models, and survival analysis for oncology. Work spans health records, pathology reports and slides, radiology, and omics, with software for data integration, patient embeddings, information extraction, and outcome modeling.',
  email: 'Aakash.Tripathi@moffitt.org',
  personalEmail: 'Aakash.Tripathi0304@gmail.com',
  phone: '(404) 234-8483',
  photo: '/assets/profile-photo.jpg',
};

export const links = {
  scholar: 'https://scholar.google.com/citations?user=7X57fGgAAAAJ&hl=en',
  orcid: 'https://orcid.org/0000-0001-7231-0487',
  github: 'https://github.com/Aakash-Tripathi',
  huggingface: 'https://huggingface.co/Aakash-Tripathi',
  linkedin: 'https://www.linkedin.com/in/aakash-tripathi/',
  researchgate: 'https://www.researchgate.net/profile/Aakash-Tripathi-2',
  labGithub: 'https://github.com/lab-rasool',
  labHuggingface: 'https://huggingface.co/Lab-Rasool',
  lab: 'https://lab.moffitt.org/Rasool/',
};

export const nav = [
  { label: 'Selected Work', href: '/selected-work/' },
  { label: 'Software', href: '/software/' },
  { label: 'Competencies', href: '/competencies/' },
  { label: 'Talks', href: '/talks/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'CV', href: '/cv/' },
];

export const experience = [
  {
    title: 'Generative and Multimodal AI Research Scientist - Precision Oncology',
    organization: 'H. Lee Moffitt Cancer Center & Research Institute',
    location: 'Tampa, Florida, USA',
    start: 'September 27, 2026',
    end: 'Present',
    bullets: [
      'Design, develop, and validate machine learning and deep learning methods for cancer diagnosis, prognosis, treatment response prediction, risk stratification, and decision support.',
      'Conduct research in multimodal learning and cross-modal representation learning, integrating health records, imaging, pathology, molecular and genomic profiles, and outcomes over time.',
      'Develop, adapt, fine-tune, and evaluate foundation models, large language models, vision-language models, and generative AI systems for oncology research.',
      'Design and compare embedding methods, data fusion architectures, survival models, and approaches for prognosis and treatment response prediction.',
      'Develop methods to extract, analyze, and reason over electronic health records, clinical documentation, pathology reports, and radiology reports.',
      'Apply transformer architectures, representation learning, self-supervised learning, generative modeling, and foundation model adaptation to research questions in oncology.',
      'Build data and model pipelines that connect clinical, imaging, pathology, molecular, genomic, and longitudinal outcome data for training and evaluation.',
      'Implement and optimize model training, fine-tuning, evaluation, inference, and deployment using Linux, high-performance computing, distributed computing, and cloud platforms.',
      'Maintain data management, model validation, documentation, and computational reproducibility practices; use AI-assisted software development tools in research workflows.',
      'Work with clinicians, researchers, data scientists, and bioinformaticians to translate cancer research questions into models, analyses, and software.',
      'Contribute to research planning, execution, and project leadership; provide expertise in machine learning, multimodal AI, and foundation models, and mentor trainees as assigned.',
      'Prepare manuscripts, conference presentations, grant application contributions, and technical reports; support methodology development, intellectual property, and translational research.',
    ],
  },
  {
    title: 'Machine Learning Engineer I',
    organization: 'H. Lee Moffitt Cancer Center & Research Institute',
    department: 'Department of Machine Learning',
    location: 'Tampa, Florida, USA',
    start: 'September 2025',
    end: 'September 26, 2026',
    bullets: [
      'Developed and maintained HONeYBEE software for generating patient embeddings from health records, pathology, radiology, and molecular data; released code and datasets through GitHub and Hugging Face.',
      'Developed CLEVER, a system that uses LLM agents to extract variables, patient timelines, and ICD codes from medical records while retaining document evidence and reasoning for review.',
      'Supported institution-scale deployment of CLEVER for record processing, variable extraction, and document quality review at Moffitt Cancer Center.',
      'Worked with pathology, oncology, epidemiology, and machine learning collaborators on model evaluation, cohort analysis, and publication of findings.',
      'Contributed to studies of pathology report extraction, survival modeling, radiomics, and transcription factor binding site prediction, and presented methods through workshops and research forums.',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    organization: 'University of South Florida',
    location: 'Tampa, Florida, USA',
    start: 'September 2022',
    end: 'August 2025',
    note: 'Supervisors: Yasin Yilmaz, Ph.D., and Ghulam Rasool, Ph.D. Research collaboration with the Department of Machine Learning at Moffitt Cancer Center.',
    bullets: [
      'Developed MINDS to aggregate and link oncology data from repositories into patient-centered datasets for machine learning.',
      'Developed HONeYBEE pipelines for preprocessing, foundation model inference, embedding generation, and integration of text, imaging, pathology, and omics data.',
      'Designed experiments for cancer classification, patient retrieval, cohort clustering, and survival prediction; compared modality combinations and fusion approaches.',
      'Contributed to SeNMo, EAGLE, and PARADIGM research on omics representations, attention, graph learning, and survival analysis.',
      'Collaborated on LLM methods for pathology report extraction, wrote manuscripts, and disseminated code, datasets, abstracts, and presentations.',
    ],
  },
];

export const education = [
  {
    degree: 'Ph.D. in Electrical Engineering',
    institution: 'University of South Florida',
    location: 'Tampa, Florida, USA',
    start: 'August 2022',
    end: 'August 2025',
    details: [
      'Dissertation: Embedding-Based Deep Learning Frameworks for Multimodal Oncology Data Integration.',
      'Advisors: Yasin Yilmaz, Ph.D., and Ghulam Rasool, Ph.D.',
    ],
    url: 'https://digitalcommons.usf.edu/etd/10908/',
    urlLabel: 'Read the dissertation',
  },
  {
    degree: 'B.S. in Electrical and Computer Engineering',
    institution: 'Rowan University',
    location: 'Glassboro, New Jersey, USA',
    start: 'September 2018',
    end: 'May 2022',
    details: [],
  },
];

const doi = (id) => `https://doi.org/${id}`;

// `project` links a publication to its write-up under /projects/<slug>.
export const publications = [
  {
    id: 'journal',
    label: 'Journal articles',
    items: [
      {
        authors: 'Davis EW, Park MA, Basinski TL, Alhassan S, Gomez MF, Genilo-Delgado M, Sinnamon AJ, Hodul PJ, Karolak A, Sayegh Z, Nguyen J, Rummens B, Li J, Tripathi A, Parker NH, Pimiento JM, Rasool G, Tassielli AF, Chen D-T, Centeno BA, Jiang K, Jeong D, Permuth JB',
        title: 'CT-Derived Radiomic Signature of MUC6 Expression Improves Guideline-Based Risk Stratification in Intraductal Papillary Mucinous Neoplasms',
        venue: 'Cancers',
        details: '2026;18(14):2264',
        year: 2026,
        url: doi('10.3390/cancers18142264'),
      },
      {
        authors: 'Tripathi A, Nielsen IE, Umer M, Ramachandran RP, Rasool G',
        title: 'Robust Transcription Factor Binding Site Prediction and Explainability Using a Heterogeneous Mixture of Experts Architecture',
        venue: 'Mathematics',
        details: '2026;14(14):2489',
        year: 2026,
        note: 'Co-first author',
        url: doi('10.3390/math14142489'),
        code: 'https://github.com/lab-rasool/TFBS',
        project: 'hetmoe',
        selected: true,
      },
      {
        authors: 'Tripathi A, Waqas A, Venkatesan K, Ullah E, Khan A, Khalil F, Chen W-S, Ozturk ZG, Saeed-Vafa D, Bui MM, Schabath MB, Rasool G',
        title: 'Using Consensus-Based Reasoning and Large Language Models to Extract Structured Data From Surgical Pathology Reports',
        venue: 'Laboratory Investigation',
        details: '2026;106(2):104272. Published online December 16, 2025',
        year: 2026,
        url: doi('10.1016/j.labinv.2025.104272'),
        project: 'clever',
        selected: true,
      },
      {
        authors: 'Tripathi A, Waqas A, Schabath MB, Yilmaz Y, Rasool G',
        title: 'HONeYBEE: enabling scalable multimodal AI in oncology through foundation model-driven embeddings',
        venue: 'npj Digital Medicine',
        details: '2025;8:622',
        year: 2025,
        note: 'Co-first author and corresponding author',
        url: doi('10.1038/s41746-025-02003-4'),
        code: 'https://github.com/lab-rasool/HoneyBee',
        project: 'honeybee',
        selected: true,
      },
      {
        authors: 'Flack D, Tripathi A, Waqas A, Rasool G, Dera D',
        title: 'Robust Multimodal Fusion for Survival Prediction in Cancer Patients',
        venue: 'Cancer Informatics',
        details: '2025;24:11769351251376192',
        year: 2025,
        url: doi('10.1177/11769351251376192'),
        project: 'senmo',
      },
      {
        authors: 'Waqas A, Tripathi A, Ahmed S, Mukund A, Farooq H, Johnson JO, Stewart PA, Naeini M, Schabath MB, Rasool G',
        title: 'Self-Normalizing Multi-Omics Neural Network for Pan-Cancer Prognostication',
        venue: 'International Journal of Molecular Sciences',
        details: '2025;26(15):7358',
        year: 2025,
        note: 'Co-first author',
        url: doi('10.3390/ijms26157358'),
        project: 'senmo',
        selected: true,
      },
      {
        authors: 'Waqas A, Tripathi A, Ramachandran RP, Stewart PA, Rasool G',
        title: 'Multimodal data integration for oncology in the era of deep neural networks: a review',
        venue: 'Frontiers in Artificial Intelligence',
        details: '2024;7:1408843',
        year: 2024,
        note: 'Co-first author',
        url: doi('10.3389/frai.2024.1408843'),
      },
      {
        authors: 'Tripathi A, Waqas A, Venkatesan K, Yilmaz Y, Rasool G',
        title: 'Building Flexible, Scalable, and Machine Learning-Ready Multimodal Oncology Datasets',
        venue: 'Sensors',
        details: '2024;24(5):1634',
        year: 2024,
        note: 'Co-first author and corresponding author',
        url: doi('10.3390/s24051634'),
        code: 'https://github.com/lab-rasool/MINDS',
        project: 'minds',
        selected: true,
      },
      {
        authors: 'Ahmed S, Nielsen IE, Tripathi A, Siddiqui S, Ramachandran RP, Rasool G',
        title: 'Transformers in time-series analysis: A tutorial',
        venue: 'Circuits, Systems, and Signal Processing',
        details: '2023;42(12):7433-7466',
        year: 2023,
        url: doi('10.1007/s00034-023-02454-8'),
      },
    ],
  },
  {
    id: 'proceedings',
    label: 'Conference proceedings',
    items: [
      {
        authors: 'Epifano JR, Silvestri A, Yu A, Ramachandran RP, Tripathi A, Rasool G',
        title: 'A Comparison of Feature Selection Techniques for First-day Mortality Prediction in the ICU',
        venue: '2023 IEEE International Symposium on Circuits and Systems (ISCAS)',
        details: '2023:1-5',
        year: 2023,
        url: doi('10.1109/ISCAS46773.2023.10182228'),
      },
    ],
  },
  {
    id: 'chapter',
    label: 'Book chapter',
    items: [
      {
        authors: 'Tripathi A, Nazrul A, Chen W-S',
        title: 'Role of Datasets in Precision Pathology',
        venue: 'In: Ullah E, Singh RS, Parwani AV, editors. Precision Pathology: From Pixels to Predictions. Springer',
        details: 'Forthcoming. In production',
        note: 'Corresponding author',
        url: 'https://link.springer.com/book/9783032369796',
      },
    ],
  },
  {
    id: 'preprints',
    label: 'Preprints',
    items: [
      {
        authors: 'Tripathi A, Waqas A, Schabath MB, Yilmaz Y, Rasool G',
        title: 'EAGLE: Efficient Alignment of Generalized Latent Embeddings for Multimodal Survival Prediction with Interpretable Attribution Analysis',
        venue: 'arXiv',
        details: '2025;2506.22446',
        year: 2025,
        url: 'https://arxiv.org/abs/2506.22446',
        project: 'eagle',
      },
      {
        authors: 'Waqas A, Tripathi A, Stewart P, Naeini M, Schabath MB, Rasool G',
        title: 'Embedding-based Multimodal Learning on Pan-Squamous Cell Carcinomas for Improved Survival Outcomes',
        venue: 'arXiv',
        details: '2024;2406.08521',
        year: 2024,
        url: 'https://arxiv.org/abs/2406.08521',
      },
    ],
  },
  {
    id: 'dissertation',
    label: 'Dissertation',
    items: [
      {
        authors: 'Tripathi AG',
        title: 'Embedding-Based Deep Learning Frameworks for Multimodal Oncology Data Integration',
        venue: 'Ph.D. dissertation, University of South Florida',
        details: '2025',
        year: 2025,
        url: 'https://digitalcommons.usf.edu/etd/10908/',
      },
    ],
  },
  {
    id: 'abstracts',
    label: 'Conference abstracts',
    items: [
      {
        authors: 'Tripathi AG, Waqas A, Davis EW, Permuth JB, Farinhas J, Yilmaz Y, Schabath MB, Rasool G',
        title: 'Real-world evaluation of multimodal AI: Foundation model-driven multimodal AI for GBM, NSCLC, and PDAC',
        venue: 'Cancer Research',
        details: '2026;86(7 Supplement):1251. AACR Annual Meeting, San Diego, California, April 17-22, 2026',
        year: 2026,
        url: doi('10.1158/1538-7445.AM2026-1251'),
        project: 'honeybee',
      },
      {
        authors: 'Waqas A, Tripathi AG, Bowles K, Miner B, Islam JY, Coghill AE, Jones A, Schabath MB, Rasool G',
        title: 'Multi-agent AI orchestration for temporal-aware extraction of social determinants of health from unstructured clinical records in cancer populations',
        venue: 'Cancer Research',
        details: '2026;86(7 Supplement):26. AACR Annual Meeting, San Diego, California, April 17-22, 2026',
        year: 2026,
        url: doi('10.1158/1538-7445.AM2026-26'),
        project: 'clever',
      },
      {
        authors: 'Tripathi A, Elzaafarany O, Mokhtari S, Vogelbaum M, Bui MM, Rasool G',
        title: 'Multi-Agent System for Automated Extraction of Neuro-Oncology Biomarkers from Pathology Reports',
        venue: 'Laboratory Investigation',
        details: '2026;106. Abstract 521, USCAP Annual Meeting, San Antonio, Texas, March 21-26, 2026',
        year: 2026,
        url: doi('10.1016/j.labinv.2025.104806'),
        project: 'clever',
      },
      {
        authors: 'Waqas A, Tripathi A, Naeini M, Stewart P, Schabath MB, Rasool G',
        title: 'Using Patient Embeddings From Foundation Models for Enhanced Survival Analysis in Lung Squamous Cell Carcinoma',
        venue: 'American Journal of Respiratory and Critical Care Medicine',
        details: '2025;211(Supplement 1):A3108',
        year: 2025,
        url: doi('10.1164/ajrccm.2025.211.Abstracts.A3108'),
      },
      {
        authors: 'Tripathi AG, Waqas A, Yilmaz Y, Schabath MB, Rasool G',
        title: 'Predicting treatment outcomes using cross-modality correlations in multimodal oncology data',
        venue: 'Cancer Research',
        details: '2025;85(8 Supplement 1):3641',
        year: 2025,
        url: doi('10.1158/1538-7445.AM2025-3641'),
      },
      {
        authors: 'Waqas A, Tripathi A, Naeini M, Stewart P, Schabath MB, Rasool G',
        title: 'PARADIGM: an embeddings-based multimodal learning framework with foundation models and graph neural networks',
        venue: 'Cancer Research',
        details: '2025;85(8 Supplement 1):991',
        year: 2025,
        url: doi('10.1158/1538-7445.AM2025-991'),
        project: 'senmo',
      },
      {
        authors: 'Tripathi A, Waqas A, Venkatesan K, Ullah E, Bui MM, Rasool G',
        title: 'AI-Driven Extraction of Key Clinical Data from Pathology Reports to Enhance Cancer Registries',
        venue: 'Laboratory Investigation',
        details: '2025;105(3):103629. Abstract 1391, USCAP Annual Meeting, Boston, Massachusetts, March 22-27, 2025',
        year: 2025,
        url: doi('10.1016/j.labinv.2024.103629'),
        project: 'clever',
      },
      {
        authors: 'Waqas A, Tripathi A, Mukund A, Stewart P, Naeini M, Rasool G',
        title: 'BIO24-031: Hierarchical Multimodal Learning on Pan-Squamous Cell Carcinomas for Improved Survival Outcomes',
        venue: 'Journal of the National Comprehensive Cancer Network',
        details: '2024;22(2.5)',
        year: 2024,
        url: doi('10.6004/jnccn.2023.7137'),
      },
      {
        authors: 'Tripathi A, Waqas A, Rasool G',
        title: 'BIO24-030: Unifying Multimodal Data, Time Series Analytics, and Contextual Medical Memory: Introducing MINDS as an Oncology-Centric Cloud-Based Platform',
        venue: 'Journal of the National Comprehensive Cancer Network',
        details: '2024;22(2.5)',
        year: 2024,
        url: doi('10.6004/jnccn.2023.7305'),
        project: 'minds',
      },
      {
        authors: 'Tripathi A, Waqas A, Yilmaz Y, Rasool G',
        title: 'Multimodal transformer model improves survival prediction in lung cancer compared to unimodal approaches',
        venue: 'Cancer Research',
        details: '2024;84(6 Supplement):4905',
        year: 2024,
        url: doi('10.1158/1538-7445.AM2024-4905'),
      },
      {
        authors: 'Waqas A, Tripathi A, Ahmed S, Mukund A, Stewart P, Naeini M, Farooq H, Rasool G',
        title: 'SeNMo: A self-normalizing deep learning model for enhanced multi-omics data analysis in oncology',
        venue: 'Cancer Research',
        details: '2024;84(6 Supplement):908',
        year: 2024,
        url: doi('10.1158/1538-7445.AM2024-908'),
        project: 'senmo',
      },
    ],
  },
];

export const talks = [
  {
    authors: 'Waqas A, Tripathi A',
    title: 'Multimodal AI for Precision Oncology: From Data Integration to CDS',
    venue: 'Stanford MedAI Group Exchange, session 155',
    date: '2026',
    note: 'Co-presenter',
    url: 'https://www.youtube.com/watch?v=OA4Ja5eFH1U',
    urlLabel: 'Watch the talk',
    image: 'gallery/stanford-medai.jpg',
    credit: 'Image: Stanford MedAI video thumbnail',
  },
  {
    authors: 'Elzaafarany O, Tripathi A, Mokhtari S, Rasool G',
    title: 'Clinically Integrated Multi-Agent Artificial Intelligence System for Automated Extraction of Neuro-Oncology Biomarkers from Pathology Reports',
    venue: 'Poster, Moffitt Scientific Symposium, Tampa, Florida',
    date: '2026',
    note: 'Coauthor',
  },
  {
    authors: 'Tripathi A, Waqas A, Rasool G',
    title: 'CLeVER Multi-Agent AI Orchestration for Temporal-Aware Clinical Variable Extraction from Unstructured Medical Records',
    venue: 'Dr. Robert Gillies Machine Learning Workshop in Cancer',
    date: 'October 30, 2025',
  },
  {
    authors: 'Tripathi A, Waqas A, Venkatesan K, Ullah E, Schabath MB, Bui MM, Rasool G',
    title: 'AI-Driven Extraction of Key Clinical Data from Pathology Reports to Enhance Cancer Registries',
    venue: 'USCAP 114th Annual Meeting, Boston, Massachusetts',
    date: 'March 22-27, 2025',
    thumb: 'blog/clever/automated-evaluation-tcga.png',
    credit: 'Image: results from the follow-on consensus study, Tripathi et al. (2026), Laboratory Investigation, © 2025 USCAP, published by Elsevier',
  },
  {
    authors: 'Tripathi A, Waqas A, Yilmaz Y, Rasool G',
    title: 'Accelerate Cancer Research With AI-Driven Multimodal Data Integration',
    venue: 'NVIDIA GTC 2025, Poster P74176',
    date: 'March 20, 2025',
    url: 'https://www.nvidia.com/en-us/on-demand/session/gtc25-p74176/',
    urlLabel: 'View the poster',
    image: 'gallery/gtc-2025-poster.png',
    credit: 'Image: the poster PDF from the GTC session page, titled "HoneyBee: Developing Multimodal AI-Ready Datasets from Public Cancer Repositories"',
  },
  {
    authors: 'Rasool G, Tripathi A, Waqas A, Ullah E, Bui MM',
    title: 'Extraction of Discrete Information from Pathology Reports Using Local and Private LLMs',
    venue: 'Oral presentation, Digital Pathology Association, Pathology Visions',
    date: '2024',
    thumb: 'blog/clever/report-example.png',
    credit: 'Image: example from the later consensus-study preprint, Tripathi et al. (2025), medRxiv, CC BY-NC-ND 4.0',
    note: 'Coauthor',
  },
  {
    authors: 'Tripathi A, Waqas A, Yilmaz Y, Rasool G',
    title: 'Advancing Cancer Research Through Integrated Multimodal Data Analysis: A Comprehensive Framework for Precision Oncology',
    venue: 'USF AI+X Symposium',
    date: 'September 29, 2023',
  },
  {
    authors: 'Waqas A, Tripathi A, Mukund A, Stewart P, Naeini M, Rasool G',
    title: 'Pan-cancer Learning for Survival Prediction',
    venue: 'USF AI+X Symposium',
    date: 'September 29, 2023',
  },
];

export const teaching = [
  {
    date: 'June 12, 2026',
    title: 'Running Local LLMs Behind Institutional Firewalls: Hands-On Guide for Secure Clinical AI',
    venue: 'Society for Imaging Informatics in Medicine Annual Meeting | Pittsburgh, Pennsylvania',
    role: 'Speaker and co-presenter, Learning Lab LL4022, with Ghulam Rasool and Asim Waqas. Instruction covered model selection, deployment behind institutional firewalls, and LLM workflows for imaging and pathology.',
    url: 'https://last-year.annualmeeting.siim.org/speakers/aakash-tripathi-phd/',
    urlLabel: 'Speaker profile',
    thumb: 'gallery/siim-2026.jpg',
    credit: 'Image: speaker headshot',
  },
  {
    date: 'July 8, 2025',
    title: 'Scalable Multimodal AI in Oncology Using HONeYBEE: From Embeddings to Clinical Impact',
    venue: 'Mayo Clinic AI Summit',
    role: 'Teaching assistant',
    url: 'https://ai-summit.com/ai-summit/home',
    urlLabel: 'Workshop',
    image: 'gallery/mayo-2025-honeybee-workshop.png',
    alt: 'Grid of 64 H&E tissue patches extracted by HONeYBEE',
    credit: 'Image: HONeYBEE patch-extraction output, lab-rasool/HoneyBee, CC BY-NC-ND 4.0',
  },
  {
    date: 'February 23, 2024 and June 29, 2022',
    title: 'Building Transformer-based Natural Language Processing',
    venue: 'NVIDIA Deep Learning Institute | North America | Virtual',
    role: 'Teaching assistant for two student workshops',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-03+V3',
    urlLabel: 'Workshop',
  },
  {
    date: 'February 22, 2020',
    title: 'Fundamentals of Deep Learning for Computer Vision',
    venue: 'NVIDIA-sponsored workshop | Rutgers Business School, Rutgers University | New Jersey',
    role: 'Teaching assistant',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-01+V3',
    urlLabel: 'Workshop',
  },
];

export const peerReview = {
  period: '2025 - Present',
  journals: [
    'Nature Communications',
    'npj Digital Medicine',
    'Scientific Reports',
    'Journal of Medical Systems',
    'BMC Medical Informatics and Decision Making',
    'Discover Artificial Intelligence',
    'Discover Applied Sciences',
  ],
};

export const mentoring = [
  { name: 'Siddharth Sivaram', affiliation: 'University of South Florida, Electrical Engineering', period: 'August 2025 - Present' },
  { name: 'Hanieh Ajami', affiliation: 'University of South Florida, Computer Science', period: 'January 2025 - Present' },
  { name: 'Nikolas Koutsoubis', affiliation: 'Moffitt Cancer Center, Department of Machine Learning', period: 'August 2024 - Present' },
  { name: 'Dominic Flack', affiliation: 'Rochester Institute of Technology, Chester F. Carlson Center for Imaging Science', period: 'August 2024 - February 2025' },
  { name: 'Kavya Venkatesan', affiliation: 'Moffitt Cancer Center, Department of Machine Learning', period: 'May 2023 - Present' },
  { name: 'Asim Waqas', affiliation: 'Moffitt Cancer Center, Department of Machine Learning', period: 'August 2022 - August 2025' },
];

export const awards = [
  {
    title: 'Best Poster Award',
    venue: 'Dr. Robert Gillies Machine Learning Workshop in Cancer',
    date: '2024',
    detail: 'HONeYBEE: Enabling Scalable Multimodal AI in Oncology Through Foundation Model-Driven Embeddings. Award: $1,000.',
  },
  {
    title: 'Second place',
    venue: 'Moffitt Cancer Center Bio-Data Club Hackathon',
    date: 'December 12-13, 2024',
    detail: 'Project: Patient Data Vectors - An Efficient Cancer Research Framework.',
  },
  { title: 'Graduate Assistantship Award', venue: 'University of South Florida', date: '2022-2025' },
  { title: "Dean's List", venue: 'Rowan University', date: '2018-2022' },
];

export const memberships = [
  { name: 'IEEE Eta Kappa Nu (IEEE-HKN)', role: 'Member', period: 'April 16, 2024 - Present' },
  { name: 'Institute of Electrical and Electronics Engineers (IEEE)', role: 'Member' },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'MATLAB/Octave', 'JavaScript', 'SQL', 'Rust', 'React', 'Go', 'Shell scripting'] },
  { group: 'Modeling and inference', items: ['PyTorch', 'Hugging Face', 'vLLM', 'Ollama', 'LangChain', 'Deep Agents', 'NVIDIA RAPIDS'] },
  {
    group: 'Research methods',
    items: ['Multimodal representation learning', 'Foundation model adaptation', 'Clinical NLP', 'Computational pathology', 'Survival analysis', 'Graph learning', 'Model attribution'],
  },
  { group: 'Systems', items: ['Linux/UNIX', 'High-performance computing', 'Slurm', 'AWS', 'Docker', 'Podman', 'React', 'SQL/NoSQL databases'] },
];

export const media = [
  {
    outlet: 'The Pathologist',
    title: 'AI Tackles Pathology Report Complexity',
    byline: 'Allerton J.',
    date: 'April 8, 2026',
    detail: 'Interview with Marilyn Bui and Ghulam Rasool discussing the pathology extraction study led by Tripathi and colleagues.',
    url: 'https://www.thepathologist.com/issues/2026/articles/april/ai-tackles-pathology-report-complexity/',
  },
  {
    outlet: 'OncoDaily',
    title: "Gilmer Valdes: Cancer Care Shouldn't Depend on Your ZIP Code",
    date: 'January 18, 2026',
    detail: 'Republishes a statement by Gilmer Valdes acknowledging Aakash Tripathi among the research collaborators whose work laid the groundwork for OncoBrain.',
    url: 'https://oncodaily.com/voices/gilmer-valdes-442630',
  },
];

// Extra home-carousel images that are not tied to a talk entry.
export const gallery = [
  {
    image: 'gallery/gillies-2025-hackathon.png',
    alt: 'Whole-slide image thumbnail beside artifact, background, and tissue probability maps from a DenseNet121 tissue detector',
    caption: "Tissue-detector output from our lab's HONeYBEE-based hackathon materials for the 2025 Dr. Robert Gillies Machine Learning Workshop in Cancer",
    href: 'https://github.com/lab-rasool/gillies-workshop-hackathon-2025',
  },
];

// Dated highlights for the home page, newest first.
export const news = [
  { date: '2026-09-27', text: 'Started as Generative and Multimodal AI Research Scientist, Precision Oncology, at Moffitt Cancer Center.' },
  { date: '2026-07', text: 'HetMoE and ShiftSmooth for transcription factor binding site prediction published in Mathematics.', href: '/blog/hetmoe/' },
  { date: '2026-06-12', text: 'Speaker and co-presenter, Learning Lab LL4022 at the SIIM Annual Meeting in Pittsburgh: running local LLMs behind institutional firewalls.' },
  { date: '2026-04-17', text: 'Two abstracts at the AACR Annual Meeting 2026 in San Diego: real-world multimodal AI and multi-agent extraction of social determinants of health.' },
  { date: '2026-04-08', text: 'The Pathologist covered our pathology report extraction study.', href: 'https://www.thepathologist.com/issues/2026/articles/april/ai-tackles-pathology-report-complexity/' },
  { date: '2026-03-21', text: 'USCAP 2026 abstract on a multi-agent system for neuro-oncology biomarker extraction (San Antonio).' },
  { date: '2025-12-16', text: 'Consensus-based LLM extraction from surgical pathology reports published online in Laboratory Investigation.', href: '/blog/clever/' },
  { date: '2025-10-30', text: 'Presented CLEVER multi-agent clinical variable extraction at the Dr. Robert Gillies Machine Learning Workshop in Cancer.' },
  { date: '2025-09', text: 'Joined the Department of Machine Learning at Moffitt Cancer Center as Machine Learning Engineer I.' },
  { date: '2025-08', text: 'Completed a Ph.D. in Electrical Engineering at the University of South Florida.' },
  { date: '2025-07-08', text: 'Teaching assistant for the HONeYBEE workshop at the Mayo Clinic AI Summit.' },
  { date: '2025-03-20', text: 'Poster P74176 at NVIDIA GTC 2025 on AI-driven multimodal data integration.' },
];
