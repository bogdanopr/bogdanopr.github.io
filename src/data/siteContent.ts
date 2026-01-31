export interface LogEntry {
    date: string;
    title: string;
    description: string | string[];
}

export interface SpecItem {
    label: string;
    value: string;
}

export interface StatusItem {
    label: string;
    value: string;
    color?: string;
}

export const siteContent = {
    header: {
        tag: "NEURAL_ID_X20.77_CODENAME_V",
        title: "B0GDAN OPREA",
        subtitle: "AI ENGINEER & ENTHUSIAST / SOFTWARE ENGINEER / NIGHT CITY LEGEND",
        glitchText: "B0GDAN OPREA",
        accessAlert: "//ACCESS_GRANTED",
    },
    biometrics: {
        tag: "TECH_CORE",
        items: [
            { label: 'CORE_FRONTEND', value: 'TYPESCRIPT / REACT / NEXT.JS' },
            { label: 'CORE_BACKEND', value: 'NODE.JS / JAVA SPRINGBOOT' },
            { label: 'DB_LAYER', value: 'POSTGRESQL / NOSQL' },
            { label: 'EXPERIENCED_IN', value: 'IAM / APIs / MICROSERVICES' }
        ] as SpecItem[],
    },
    experience: {
        tag: "EXPERIENCE_LOGS",
        entries: [
            {
                date: "February 2025 - PRESENT",
                title: "DEVELOPER S. ENGINEER // OKTA Auth0",
                description: [
                    "Helping fellow developers integrate the Auth0 product into their apps.",
                    "Configured and debugged Auth0's React SDK ensuring smooth integrations.",
                    "Designed and developed custom database connection scripts, actions, and forms to extend platform functionality.",
                    "Configured and debugged authentication (SAML, OIDC, OAuth) ensuring secure integrations.",
                    "Built and tested feature showcases tailored to real-world scenarios.",
                    "Diagnosed and resolved deployment problems leading to smoother rollouts."
                ]
            },
            {
                date: "April 2023 - February 2025",
                title: "SOFTWARE ENGINEER // RAIFFEISEN BANK",
                description: [
                    "Fullstack Development with Java Springboot / Angular / SQL using Agile Methodologies:",
                    "develop Microservices for online Banking Applications with Spring Boot .",
                    "develop UIs for online Banking Applications with Angular .",
                    "used GIT technologies for version control ( GitHub Enterprise ) .",
                    "used POSTGRESQL databases and Liquibase for DB management .",
                    "used Jenkins for automation .",
                    "used Jira , Confluence for documentation and task overview .",
                    "used Swagger , Postman for ENDPOINT testing ."
                ]
            }
        ] as LogEntry[],
    },
    skills: {
        tag: "TECHNICAL_LOADOUT",
        items: [
            'TYPESCRIPT', 'REACT', 'ANGULAR', 'NEXT.JS', 'NODEJS',
            'DATADOG', 'JAVA', 'SPRINGBOOT', 'HIBERNATE', 'MAVEN/GRADLE', 'LIQUIBASE',
            'POSTGRESQL', 'GIT', 'JENKINS', 'JIRA', 'CONFLUENCE', 'SWAGGER', 'POSTMAN', 'AUTH0', 'OKTA', 'AWS'
        ],
    },
    sidebar: {
        tags: {
            systemStatus: "SYSTEM_STATUS",
            dataFeed: "RAW_DATA_FEED",
            uplinks: "EXTERNAL_UPLINKS",
        },
        status: [
            { label: 'CPU_LOAD', value: '78%' },
            { label: 'BIOCHIP_INTEGRITY', value: '42%', color: 'var(--pink)' },
            { label: 'NEURAL_SYNC', value: '95%' }
        ] as StatusItem[],
        errorMsg: "CRITICAL_ERROR: Unauthorized access to Relic sub-routine. Bio-signature mismatch.",
        links: {
            linkedIn: "https://www.linkedin.com/in/bogdancojocaruoprea/",
            linkedInLabel: "LETS_CONNECT",
            gitHub: "https://github.com/bogdanopr",
            gitHubLabel: "LETS_GIT_IT",
            email: "mailto:bogdancojocaruoprea@icloud.com",
            emailLabel: "EMAIL_SYNC",
        },
    },
    malfunction: {
        title: "RELIC MALFUNCTION DETECTED",
        metadata: {
            imageName: "IMAGE NAME: IKUX-3.10.10",
            imageType: "IMAGE TYPE: ARM LINUX KERNEL IMAGE",
            loadAddress: "LOAD ADDRESS: 0C008100",
        },
    },
    dataCommands: [
        "INIT_BOOT_SEQUENCE...",
        "LOADING_CORE_MODULES...",
        "ACCESS_GRANTED: LEVEL_4",
        "SCANNING_VULNERABILITIES...",
        "ENCRYPTING_DATA_PACKETS...",
        "BYPASSING_ICE_LAYERS...",
        "RELIC_CHIP_ERROR_0x442",
        "TRACE_DETECTED_00:43",
        "UPLINK_STABLE...",
        "DOWNLOADING_RESUME.PDF",
        "SYNCING_NEURAL_NETWORK..."
    ],
    labels: {
        linkedInAria: "on LinkedIn",
        gitHubAria: "on GitHub",
        emailAria: "via Email",
        liveDataFeed: "Live data feed",
        streamPrefix: "> ",
    }
} as const;

export type SiteContent = typeof siteContent;
