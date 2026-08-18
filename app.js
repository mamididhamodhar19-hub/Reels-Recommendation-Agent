// AURA - Recommendation Agent Logic & UI Controller

// 1. Library of watched Reels (Fictional Input Reels)
const REELS_LIBRARY = [
    {
        id: "REEL-001",
        title: "When you miss a semicolon in production 💀",
        desc: "A comedic skit showing a junior developer sweating over a single missing semicolon in a 5,000-line Java application.",
        topic: "Programming memes / Java",
        category: "Java",
        techLevel: 1, // Beginner
        engagement: { completion: 100, liked: true, saved: false, shared: true, replayed: true }
    },
    {
        id: "REEL-002",
        title: "Day in the Life of a Google Software Engineer ☕️",
        desc: "Aesthetic vlog tracking a Google SWE's morning routine, meetings, free meals, and desk workspace setups.",
        topic: "Software engineering / Developer lifestyle",
        category: "Career",
        techLevel: 1, // Beginner
        engagement: { completion: 100, liked: true, saved: true, shared: true, replayed: false }
    },
    {
        id: "REEL-003",
        title: "Coding Interview vs. Real Job 🤡",
        desc: "Satirical contrast between rigorous LeetCode graph algorithms and the actual simple APIs written on the job.",
        topic: "Coding interview joke",
        category: "Software Engineering",
        techLevel: 1, // Beginner
        engagement: { completion: 90, liked: true, saved: false, shared: false, replayed: true }
    },
    {
        id: "REEL-004",
        title: "MacBook Pro M3 vs. Dell XPS 15: Developer Edition 💻",
        desc: "Detailed benchmark comparison of build times, battery efficiency, and local Docker compile speeds for developers.",
        topic: "Laptop comparison / Gadgets",
        category: "Hardware",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: false, saved: true, shared: false, replayed: false }
    },
    {
        id: "REEL-005",
        title: "How GPUs process 3D game physics 🎮",
        desc: "A visual explanation of vertex shading, parallel cores, and raytracing acceleration in high-end graphics processors.",
        topic: "Gaming technology",
        category: "Hardware",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: true, saved: true, shared: true, replayed: true }
    },
    {
        id: "REEL-006",
        title: "I built a water-cooled PC in 60 seconds ⚙️",
        desc: "A rapid assembly montage showing custom loops, fluid dynamics cooling, and thermal paste applications.",
        topic: "PC building / Hardware",
        category: "Hardware",
        techLevel: 1, // Beginner
        engagement: { completion: 80, liked: true, saved: false, shared: false, replayed: false }
    },
    {
        id: "REEL-007",
        title: "Prompt Engineering Trick: Few-Shot Prompting 🤖",
        desc: "Showing how providing 2-3 structured examples to an LLM before asking a question drastically boosts response formatting.",
        topic: "AI / Prompt engineering",
        category: "AI",
        techLevel: 1, // Beginner
        engagement: { completion: 100, liked: true, saved: true, shared: false, replayed: true }
    },
    {
        id: "REEL-008",
        title: "This GPT-4 API script writes its own tests 🧪",
        desc: "Walkthrough of a Node.js script that reads a source file, prompts an LLM, and prints matching Jest test suites.",
        topic: "AI / Coding",
        category: "AI",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: true, saved: true, shared: true, replayed: true }
    },
    {
        id: "REEL-009",
        title: "Hackers can steal your Wi-Fi using this packet trick 📡",
        desc: "Ethical demonstration of capture/deauth attacks to explain why modern WPA3 protection is vital for wireless networks.",
        topic: "Cybersecurity / Tech demo",
        category: "Cybersecurity",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: true, saved: true, shared: true, replayed: false }
    },
    {
        id: "REEL-010",
        title: "LeetCode Easy: Reverse a Linked List 🧠",
        desc: "Step-by-step whiteboard animation of changing pointer links in a singly linked list in linear time.",
        topic: "DSA / Programming",
        category: "DSA",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: false, saved: true, shared: false, replayed: true }
    },
    {
        id: "REEL-011",
        title: "Why Docker is better than 'it works on my machine' 🐳",
        desc: "Explaining containerization, image layers, and isolated runtime environments in 60 seconds.",
        topic: "Cloud / DevOps",
        category: "Cloud",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: true, saved: true, shared: true, replayed: false }
    },
    {
        id: "REEL-012",
        title: "My top 3 cybersecurity Chrome extensions 🛡️",
        desc: "Recommending visual tools for analyzing tracking cookies, blocking malicious domains, and sandboxing scripts.",
        topic: "Cybersecurity / Privacy",
        category: "Cybersecurity",
        techLevel: 1, // Beginner
        engagement: { completion: 80, liked: false, saved: true, shared: false, replayed: false }
    },
    {
        id: "REEL-013",
        title: "How databases use indexes (B-Trees explained) 📂",
        desc: "Visual representation of lookup times dropping from O(N) to O(log N) through structured binary-like indexing systems.",
        topic: "DSA / Software engineering",
        category: "DSA",
        techLevel: 3, // Advanced
        engagement: { completion: 100, liked: true, saved: true, shared: true, replayed: true }
    },
    {
        id: "REEL-014",
        title: "Cloud computing for beginners (AWS vs Azure) ☁️",
        desc: "High-level breakdown comparing virtual servers (EC2 vs VM) and object storages (S3 vs Blob Store).",
        topic: "Cloud / Tech career",
        category: "Cloud",
        techLevel: 1, // Beginner
        engagement: { completion: 90, liked: true, saved: false, shared: false, replayed: false }
    },
    {
        id: "REEL-015",
        title: "How phishing emails trick software developers 🎣",
        desc: "Analyzing a real incident where malware was hidden in a pull request dependency notification to hijack security keys.",
        topic: "Cybersecurity / Tech news",
        category: "Cybersecurity",
        techLevel: 2, // Intermediate
        engagement: { completion: 100, liked: true, saved: true, shared: false, replayed: false }
    },
    {
        id: "REEL-016",
        title: "Python vs. Java: Which should you learn first? 🐍",
        desc: "Comparing interpreter overhead, strict types, runtime ecosystems, and junior dev employment markets.",
        topic: "Programming / Tech career",
        category: "Career",
        techLevel: 1, // Beginner
        engagement: { completion: 100, liked: true, saved: false, shared: false, replayed: false }
    }
];

// 2. High-value Educational Recommendations Pool (Difficulty adaptable)
const RECOMMENDATIONS_POOL = {
    "Java": {
        "Beginner": {
            title: "Introduction to Spring Boot: Building Your First Web App",
            category: "Java",
            why: "Shifts student interest from basic syntax or meme complaints into professional server construction."
        },
        "Intermediate": {
            title: "Building a Real-World Java Project with Spring Boot",
            category: "Java",
            why: "Leverages familiarity with Java to structure a fully dockerized database-backed API microservice."
        },
        "Advanced": {
            title: "Java Concurrency & Multithreading Demystified",
            category: "Java",
            why: "Teaches complex thread pooling, blocking queues, and memory locks for highly concurrent systems."
        }
    },
    "Career": {
        "Beginner": {
            title: "How Tech Interviews Actually Work (Behind the Scenes)",
            category: "Career",
            why: "A former engineering manager explains what team leaders evaluate beyond standard syntax rules."
        },
        "Intermediate": {
            title: "Resume Optimization Secrets for Software Engineers",
            category: "Career",
            why: "Explains how to format coding projects, impact metrics, and technology stacks to beat recruiter screening."
        },
        "Advanced": {
            title: "Cracking the Tech Lead Interview: Leadership & Scale",
            category: "Career",
            why: "Focuses on engineering strategy, system reliability reviews, and mentoring frameworks."
        }
    },
    "Software Engineering": {
        "Beginner": {
            title: "Software Engineering 101: Git Version Control Practices",
            category: "Software Engineering",
            why: "Provides foundational training in staging, branching, merging, and secure pull request reviews."
        },
        "Intermediate": {
            title: "How Real Software Engineers Design APIs",
            category: "Software Engineering",
            why: "Explains structural principles like REST vs gRPC, headers, response status, and secure payload structures."
        },
        "Advanced": {
            title: "Design Patterns in Practice: Singleton vs Factory",
            category: "Software Engineering",
            why: "Deep dive into solid object-oriented architectural patterns to build maintainable enterprise codebases."
        }
    },
    "Hardware": {
        "Beginner": {
            title: "How CPUs Fetch and Execute Instructions (Von Neumann Architecture)",
            category: "Hardware",
            why: "Converts casual device comparison interest into fundamental learning about register files and clock cycles."
        },
        "Intermediate": {
            title: "Under the Hood: How GPUs Parallelize Matrix Multiplication",
            category: "Hardware",
            why: "Bridges gaming physics curiosity to how modern processors schedule thousands of threads for matrix calculation."
        },
        "Advanced": {
            title: "How SSDs Write and Store Data: NAND Flash & Controllers",
            category: "Hardware",
            why: "Explores structural memory layouts, garbage collection cycles, and physical limits of data flash cells."
        }
    },
    "AI": {
        "Beginner": {
            title: "How Neural Networks Learn: Gradient Descent Explained Visualized",
            category: "AI",
            why: "Demystifies prompt styling shortcuts with core mechanical understandings of weights and bias adjustments."
        },
        "Intermediate": {
            title: "How to Integrate LLMs into Apps Securely (LangChain & Vector DBs)",
            category: "AI",
            why: "Elevates standard API requests to robust Retrieval-Augmented Generation architectures."
        },
        "Advanced": {
            title: "Fine-Tuning vs. RAG: When to Use Which AI Strategy",
            category: "AI",
            why: "Explores cost, accuracy, hardware sizing, and fine-tuning weights for specialized business domains."
        }
    },
    "Cybersecurity": {
        "Beginner": {
            title: "Web Security 101: Understanding HTTPS and SSL Certificates",
            category: "Cybersecurity",
            why: "Explains how encryption, handshake exchanges, and Certificate Authorities protect web traffic."
        },
        "Intermediate": {
            title: "Understanding JWT (JSON Web Tokens) Security and XSS Vulnerabilities",
            category: "Cybersecurity",
            why: "Elevates basic security extension use into secure session architecture and client-side protection."
        },
        "Advanced": {
            title: "SQL Injection & Buffer Overflow: Exploit Analysis & Remediation",
            category: "Cybersecurity",
            why: "Takes a deep dive into binary exploits, heap protection, and query param sanitation rules."
        }
    },
    "DSA": {
        "Beginner": {
            title: "How Big O Notation Works in Production Code",
            category: "DSA",
            why: "Connects abstract algorithm notation to actual latency peaks in commercial production databases."
        },
        "Intermediate": {
            title: "Visualizing Graph Algorithms: Dijkstra's Shortest Path",
            category: "DSA",
            why: "Extends linear array systems to complex interconnected path searches, key for routing networks."
        },
        "Advanced": {
            title: "Demystifying Recursion and Dynamic Programming",
            category: "DSA",
            why: "Explores memoization techniques, overlap subproblems, and matrix routing optimizers."
        }
    },
    "Cloud": {
        "Beginner": {
            title: "Cloud Infrastructure 101: Virtualization & Compute Instances",
            category: "Cloud",
            why: "Clarifies core principles of hypervisors, resource allocation, and elastic cloud scaling."
        },
        "Intermediate": {
            title: "AWS Serverless vs. Containers: Choosing the Right Cloud Architecture",
            category: "Cloud",
            why: "Compares Lambda endpoints and ECS nodes on metrics of boot scaling, configuration, and cold starts."
        },
        "Advanced": {
            title: "Kubernetes Orchestration: Pods, Services, and Deployments",
            category: "Cloud",
            why: "Explores container grouping, internal network routes, node balancing, and blue-green updates."
        }
    },
    "HLD": {
        "Beginner": {
            title: "Introduction to System Design: Web Server Architecture",
            category: "HLD",
            why: "Explores fundamental client-server scaling and static vs dynamic asset rendering layouts."
        },
        "Intermediate": {
            title: "System Design 101: Understanding Load Balancers",
            category: "HLD",
            why: "Explores distributing network traffic, heartbeat checks, and round-robin routing layers."
        },
        "Advanced": {
            title: "Understanding Microservices: API Gateways Explained",
            category: "HLD",
            why: "Explores request aggregation, backend routing protocols, JWT decryption, and microservice mesh structures."
        }
    }
};

// 3. Preset User Selections
const STUDENT_PRESETS = {
    "swe-career": ["REEL-001", "REEL-002", "REEL-003", "REEL-004", "REEL-011", "REEL-013", "REEL-016"],
    "ai-dev": ["REEL-007", "REEL-008", "REEL-004", "REEL-011", "REEL-014", "REEL-016"],
    "sys-security": ["REEL-009", "REEL-012", "REEL-015", "REEL-011", "REEL-014", "REEL-002"],
    "hw-gaming": ["REEL-004", "REEL-005", "REEL-006", "REEL-001", "REEL-013", "REEL-010"],
    "random": ["REEL-003", "REEL-005", "REEL-007", "REEL-009", "REEL-011", "REEL-013", "REEL-015"]
};

// State Manager
let selectedReelIds = [];
let currentReelsState = JSON.parse(JSON.stringify(REELS_LIBRARY)); // Clone default values
let activeTuningReelId = null;

// DOM Elements
const reelsGridContainer = document.getElementById("reels-grid-container");
const selectedCountEl = document.getElementById("selected-count");
const maxCountEl = document.getElementById("max-count");
const selectionProgress = document.getElementById("selection-progress");
const btnGenerate = document.getElementById("btn-generate");
const btnClear = document.getElementById("btn-clear");
const presetButtons = document.querySelectorAll(".btn-preset");
const filterButtons = document.querySelectorAll(".filter-btn");

// Drawer Elements
const engagementDrawer = document.getElementById("engagement-drawer");
const tunerReelTitle = document.getElementById("tuner-reel-title");
const tunerCompletion = document.getElementById("tuner-completion");
const tunerCompletionVal = document.getElementById("tuner-completion-val");
const tunerLiked = document.getElementById("tuner-liked");
const tunerSaved = document.getElementById("tuner-saved");
const tunerShared = document.getElementById("tuner-shared");
const tunerReplayed = document.getElementById("tuner-replayed");
const btnSaveDrawer = document.getElementById("btn-save-drawer");
const btnCloseDrawer = document.getElementById("btn-close-drawer");

// Modal Elements
const outputModal = document.getElementById("output-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnToggleView = document.getElementById("btn-toggle-view");
const analysisLoading = document.getElementById("analysis-loading");
const analysisResults = document.getElementById("analysis-results");
const terminalLogsText = document.getElementById("terminal-logs-text");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Dashboard Elements
const profileLatentInterest = document.getElementById("profile-latent-interest");
const profileDifficulty = document.getElementById("profile-difficulty");
const profileConfidence = document.getElementById("profile-confidence");
const breakdownBars = document.getElementById("breakdown-bars");
const recommendationsContainer = document.getElementById("recommendations-container");
const markdownTextarea = document.getElementById("markdown-textarea");
const btnCopyMarkdown = document.getElementById("btn-copy-markdown");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// Initialize application
function init() {
    renderReelsGrid();
    applyPreset("swe-career");
    setupEventListeners();
}

// Render Reels Grid
function renderReelsGrid(filterCategory = "all") {
    reelsGridContainer.innerHTML = "";
    
    currentReelsState.forEach(reel => {
        // Simple client-side category filtering
        if (filterCategory !== "all") {
            const mappedFilters = {
                coding: ["Java", "Career", "Software Engineering"],
                ai: ["AI"],
                cyber: ["Cybersecurity"],
                hardware: ["Hardware"],
                cloud: ["Cloud", "DSA"]
            };
            if (!mappedFilters[filterCategory].includes(reel.category)) {
                return;
            }
        }
        
        const isSelected = selectedReelIds.includes(reel.id);
        const card = document.createElement("div");
        card.className = `reel-card ${isSelected ? "selected" : ""}`;
        card.setAttribute("data-id", reel.id);
        
        // Icon selector based on category
        let iconClass = "fa-solid fa-video";
        if (reel.category === "Java") iconClass = "fa-brands fa-java";
        else if (reel.category === "Career") iconClass = "fa-solid fa-user-tie";
        else if (reel.category === "Software Engineering") iconClass = "fa-solid fa-laptop-code";
        else if (reel.category === "Hardware") iconClass = "fa-solid fa-microchip";
        else if (reel.category === "AI") iconClass = "fa-solid fa-brain";
        else if (reel.category === "Cybersecurity") iconClass = "fa-solid fa-shield-halved";
        else if (reel.category === "DSA") iconClass = "fa-solid fa-diagram-project";
        else if (reel.category === "Cloud") iconClass = "fa-solid fa-cloud";
        
        const hasLiked = reel.engagement.liked;
        const hasSaved = reel.engagement.saved;
        const hasShared = reel.engagement.shared;
        const hasReplayed = reel.engagement.replayed;
        
        card.innerHTML = `
            <div class="card-badge">${reel.category}</div>
            <div class="select-overlay">
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="reel-preview-area">
                <i class="${iconClass} reel-icon"></i>
            </div>
            <button class="btn-configure-signals" title="Tune Engagement Signals" data-id="${reel.id}">
                <i class="fa-solid fa-gear"></i>
            </button>
            <div class="reel-card-info">
                <div>
                    <h4 class="reel-card-title">${reel.title}</h4>
                    <p class="reel-card-desc">${reel.desc}</p>
                </div>
                <div class="card-signals">
                    <div>
                        <div class="completion-bar-small" title="Completion %">
                            <div class="completion-fill-small" style="width: ${reel.engagement.completion}%"></div>
                        </div>
                        <span>${reel.engagement.completion}%</span>
                    </div>
                    <div class="card-icons">
                        <i class="fa-solid fa-heart ${hasLiked ? "active" : ""}" title="Liked"></i>
                        <i class="fa-solid fa-bookmark ${hasSaved ? "active" : ""}" title="Saved"></i>
                        <i class="fa-solid fa-share-nodes ${hasShared ? "active" : ""}" title="Shared"></i>
                        <i class="fa-solid fa-rotate-left ${hasReplayed ? "active" : ""}" title="Rewatched"></i>
                    </div>
                </div>
            </div>
        `;
        
        // Add card selection handler
        card.addEventListener("click", (e) => {
            // Ignore if gear button clicked
            if (e.target.closest(".btn-configure-signals")) {
                e.stopPropagation();
                openTuner(reel.id);
                return;
            }
            toggleReelSelection(reel.id);
        });
        
        reelsGridContainer.appendChild(card);
    });
}

// Toggle selection state
function toggleReelSelection(id) {
    const index = selectedReelIds.indexOf(id);
    if (index > -1) {
        selectedReelIds.splice(index, 1);
    } else {
        if (selectedReelIds.length >= 8) {
            showToast("Maximum of 8 Reels can be selected.");
            return;
        }
        selectedReelIds.push(id);
    }
    
    // Clear active presets highlights since user mutated selection
    presetButtons.forEach(b => b.classList.remove("active"));
    
    updateSelectionUI();
}

// Apply Selected Preset
function applyPreset(presetKey) {
    if (!STUDENT_PRESETS[presetKey]) return;
    
    selectedReelIds = [...STUDENT_PRESETS[presetKey]];
    
    // Reset individual values back to library default for a clean simulation preset load
    currentReelsState = JSON.parse(JSON.stringify(REELS_LIBRARY));
    
    // Custom setup some custom mock engagement values per preset to show interesting outputs
    if (presetKey === "swe-career") {
        // High engagement on Java & SWE
        setReelEngagement("REEL-001", 100, true, true, true, true);   // Java meme: Watched, Liked, Saved, Shared, Rewatched
        setReelEngagement("REEL-002", 100, true, true, false, false); // Day in Life: Watched, Liked, Saved
        setReelEngagement("REEL-003", 90, true, false, false, true);   // LeetCode Joke: Watched, Liked, Rewatched
        setReelEngagement("REEL-004", 40, false, false, false, false); // Laptop config: Skipped early
        setReelEngagement("REEL-011", 100, true, true, true, false);  // Docker: Watched, Liked, Saved, Shared
    } else if (presetKey === "ai-dev") {
        // High AI interest
        setReelEngagement("REEL-007", 100, true, true, true, true);  // Prompt: Watched, Liked, Saved, Shared, Rewatched
        setReelEngagement("REEL-008", 100, true, true, true, true);  // GPT script: Watched, Liked, Saved, Shared, Rewatched
        setReelEngagement("REEL-014", 30, false, false, false, false); // AWS vs Azure: Skipped early
    } else if (presetKey === "sys-security") {
        setReelEngagement("REEL-009", 100, true, true, true, true);  // Wifi: Watched, Liked, Saved, Shared, Rewatched
        setReelEngagement("REEL-015", 100, true, true, false, true);  // Phishing: Watched, Liked, Rewatched
        setReelEngagement("REEL-012", 50, false, false, false, false); // Cyber extensions: Skipped
    } else if (presetKey === "hw-gaming") {
        setReelEngagement("REEL-005", 100, true, true, true, true);  // GPU physics: Watched, Liked, Saved, Shared, Rewatched
        setReelEngagement("REEL-006", 100, true, false, true, true);  // PC build: Watched, Liked, Shared, Rewatched
    }
    
    updateSelectionUI();
    renderReelsGrid();
}

function setReelEngagement(id, completion, liked, saved, shared, replayed) {
    const reel = currentReelsState.find(r => r.id === id);
    if (reel) {
        reel.engagement = { completion, liked, saved, shared, replayed };
    }
}

// Update counters and selection graphics
function updateSelectionUI() {
    selectedCountEl.textContent = selectedReelIds.length;
    const progressPercent = (selectedReelIds.length / 8) * 100;
    selectionProgress.style.width = `${progressPercent}%`;
    
    if (selectedReelIds.length >= 6 && selectedReelIds.length <= 8) {
        btnGenerate.disabled = false;
        selectionProgress.style.background = "linear-gradient(90deg, var(--color-primary) 0%, var(--color-success) 100%)";
    } else {
        btnGenerate.disabled = true;
        selectionProgress.style.background = "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)";
    }
    
    // Add/remove selection highlights in grid DOM
    document.querySelectorAll(".reel-card").forEach(card => {
        const id = card.getAttribute("data-id");
        if (selectedReelIds.includes(id)) {
            card.classList.add("selected");
            // Set checkbox checked visually
            card.querySelector(".select-overlay").style.background = "var(--color-secondary)";
            card.querySelector(".select-overlay").style.borderColor = "var(--color-secondary)";
            card.querySelector(".select-overlay i").style.opacity = 1;
        } else {
            card.classList.remove("selected");
            card.querySelector(".select-overlay").style.background = "rgba(0, 0, 0, 0.3)";
            card.querySelector(".select-overlay").style.borderColor = "rgba(255, 255, 255, 0.3)";
            card.querySelector(".select-overlay i").style.opacity = 0;
        }
    });
}

// Open Tuner Drawer
function openTuner(reelId) {
    const reel = currentReelsState.find(r => r.id === reelId);
    if (!reel) return;
    
    activeTuningReelId = reelId;
    tunerReelTitle.textContent = reel.title;
    tunerCompletion.value = reel.engagement.completion;
    tunerCompletionVal.textContent = `${reel.engagement.completion}%`;
    tunerLiked.checked = reel.engagement.liked;
    tunerSaved.checked = reel.engagement.saved;
    tunerShared.checked = reel.engagement.shared;
    tunerReplayed.checked = reel.engagement.replayed;
    
    engagementDrawer.classList.remove("hide");
}

// Close Tuner Drawer
function closeTuner() {
    engagementDrawer.classList.add("hide");
    activeTuningReelId = null;
}

// Save Tuner drawer signals
function saveTunerSignals() {
    if (!activeTuningReelId) return;
    
    const reel = currentReelsState.find(r => r.id === activeTuningReelId);
    if (reel) {
        reel.engagement.completion = parseInt(tunerCompletion.value);
        reel.engagement.liked = tunerLiked.checked;
        reel.engagement.saved = tunerSaved.checked;
        reel.engagement.shared = tunerShared.checked;
        reel.engagement.replayed = tunerReplayed.checked;
        
        // Auto select the card if signals are modified
        if (!selectedReelIds.includes(activeTuningReelId)) {
            toggleReelSelection(activeTuningReelId);
        } else {
            renderReelsGrid();
            updateSelectionUI();
        }
        
        showToast(`Signals updated for ${reel.id}!`);
    }
    closeTuner();
}

// Clear selected items
function clearSelection() {
    selectedReelIds = [];
    presetButtons.forEach(b => b.classList.remove("active"));
    updateSelectionUI();
    renderReelsGrid();
    showToast("Selections cleared.");
}

// Setup listeners
function setupEventListeners() {
    // Preset profile click handlers
    presetButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            presetButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const presetKey = btn.getAttribute("data-preset");
            applyPreset(presetKey);
            showToast(`Applied ${btn.querySelector('span').textContent} profile`);
        });
    });
    
    // Library filter categories click handlers
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterVal = btn.getAttribute("data-filter");
            renderReelsGrid(filterVal);
            updateSelectionUI();
        });
    });
    
    // Drawer buttons
    tunerCompletion.addEventListener("input", () => {
        tunerCompletionVal.textContent = `${tunerCompletion.value}%`;
    });
    
    btnSaveDrawer.addEventListener("click", saveTunerSignals);
    btnCloseDrawer.addEventListener("click", closeTuner);
    
    // Modal buttons
    btnGenerate.addEventListener("click", runAnalysisPipeline);
    btnCloseModal.addEventListener("click", () => outputModal.classList.add("hide"));
    btnToggleView.addEventListener("click", toggleOutputTabMode);
    
    // Clear selection
    btnClear.addEventListener("click", clearSelection);
    
    // Tabs click handlers
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const targetTab = btn.getAttribute("data-tab");
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });
    
    // Copy Markdown Output
    btnCopyMarkdown.addEventListener("click", () => {
        markdownTextarea.select();
        document.execCommand("copy");
        showToast("Markdown report copied to clipboard!");
    });
}

// Toggle inside the modal header
function toggleOutputTabMode() {
    const activeTab = document.querySelector(".tab-btn.active");
    const newTabKey = activeTab.getAttribute("data-tab") === "visual-dashboard" ? "markdown-output" : "visual-dashboard";
    
    tabButtons.forEach(btn => {
        if (btn.getAttribute("data-tab") === newTabKey) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    tabContents.forEach(content => {
        if (content.id === newTabKey) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
}

// Recommendation core processing and analysis loader pipeline
function runAnalysisPipeline() {
    outputModal.classList.remove("hide");
    analysisLoading.classList.remove("hide");
    analysisResults.classList.add("hide");
    
    // Clear logs
    terminalLogsText.innerHTML = "";
    
    const logs = [
        "Resolving student history profile vectors...",
        "Evaluating behavioral engagement parameters...",
        "Filtering noise, mapping implicit/explicit signals...",
        "Synthesizing cross-topic semantic correlations...",
        "Estimating user experience level and topic depth...",
        "Querying non-hype technology recommendation database...",
        "Structuring output report model..."
    ];
    
    let logIndex = 0;
    
    function printNextLog() {
        if (logIndex < logs.length) {
            const line = document.createElement("div");
            line.className = "log-line";
            line.textContent = logs[logIndex];
            terminalLogsText.appendChild(line);
            terminalLogsText.scrollTop = terminalLogsText.scrollHeight;
            logIndex++;
            setTimeout(printNextLog, 250);
        } else {
            setTimeout(showAnalysisResults, 300);
        }
    }
    
    printNextLog();
}

// Analyze the profiles and show dashboards
function showAnalysisResults() {
    analysisLoading.classList.add("hide");
    analysisResults.classList.remove("hide");
    
    // Extract selected reels objects
    const selectedReels = currentReelsState.filter(r => selectedReelIds.includes(r.id));
    
    // 1. Calculate Interest category weights based on engagement
    const domainWeights = {
        "Software Engineering / Developer Career": 0,
        "Data Structures, Algorithms & Database Systems": 0,
        "Artificial Intelligence & LLM Application Development": 0,
        "Computer Systems & Hardware Engineering": 0,
        "Cybersecurity & Network Infrastructure": 0,
        "Cloud Infrastructure & DevOps Practices": 0
    };
    
    // Category mapping helper
    function getDomainMapping(category) {
        if (["Java", "Career", "Software Engineering"].includes(category)) return "Software Engineering / Developer Career";
        if (["DSA"].includes(category)) return "Data Structures, Algorithms & Database Systems";
        if (["AI"].includes(category)) return "Artificial Intelligence & LLM Application Development";
        if (["Hardware"].includes(category)) return "Computer Systems & Hardware Engineering";
        if (["Cybersecurity"].includes(category)) return "Cybersecurity & Network Infrastructure";
        if (["Cloud"].includes(category)) return "Cloud Infrastructure & DevOps Practices";
        return "Software Engineering / Developer Career";
    }
    
    let totalEngageScore = 0;
    let weightedTechLevelSum = 0;
    
    // Process each Reel to aggregate scores
    const analysedReels = selectedReels.map(reel => {
        const eng = reel.engagement;
        
        // Calculate raw engagement score (Range 0 - 2.45)
        const compWeight = eng.completion / 100;
        const likeBonus = eng.liked ? 0.35 : 0;
        const saveBonus = eng.saved ? 0.6 : 0;
        const shareBonus = eng.shared ? 0.5 : 0;
        const replayBonus = eng.replayed ? 0.4 : 0;
        const score = compWeight + likeBonus + saveBonus + shareBonus + replayBonus;
        
        totalEngageScore += score;
        weightedTechLevelSum += (reel.techLevel * score);
        
        // Map category weight
        const interestDomain = getDomainMapping(reel.category);
        domainWeights[interestDomain] += score;
        
        // Set confidence
        let confidence = "Medium";
        if (score >= 1.95) confidence = "High";
        if (score < 1.0) confidence = "Low";
        
        return {
            ...reel,
            engagementScore: score,
            confidence
        };
    });
    
    // 2. Identify overarching Interest
    let strongestInterest = "Software Engineering / Developer Career";
    let maxWeight = -1;
    for (const [domain, weight] of Object.entries(domainWeights)) {
        if (weight > maxWeight) {
            maxWeight = weight;
            strongestInterest = domain;
        }
    }
    
    // 3. Determine Overall user skill level (Difficulty Selection)
    const avgTechLevel = totalEngageScore > 0 ? (weightedTechLevelSum / totalEngageScore) : 1.5;
    let overallDifficulty = "Intermediate";
    if (avgTechLevel < 1.6) overallDifficulty = "Beginner";
    else if (avgTechLevel >= 2.5) overallDifficulty = "Advanced";
    
    // 4. Overall confidence
    let overallConfidence = "Medium";
    const highConfidenceCount = analysedReels.filter(r => r.confidence === "High").length;
    const lowConfidenceCount = analysedReels.filter(r => r.confidence === "Low").length;
    if (highConfidenceCount >= selectedReels.length / 2) overallConfidence = "High";
    else if (lowConfidenceCount >= selectedReels.length / 2) overallConfidence = "Low";
    
    // Apply stats to UI
    profileLatentInterest.textContent = strongestInterest;
    
    // Difficulty Badges
    profileDifficulty.textContent = overallDifficulty;
    profileDifficulty.className = `stat-value-badge difficulty-${overallDifficulty.toLowerCase()}`;
    
    // Confidence Badges
    profileConfidence.textContent = overallConfidence;
    profileConfidence.className = `stat-value-badge confidence-${overallConfidence.toLowerCase()}`;
    
    // Render interest breakdown bars
    renderBreakdownBars(domainWeights);
    
    // 5. Generate Individual recommendations matching target difficulty
    // Ensure we avoid duplicate recommendations by mapping fallback structures
    const recommendationsUsed = new Set();
    const formattedOutputs = [];
    recommendationsContainer.innerHTML = "";
    
    analysedReels.forEach((reel, index) => {
        // Map category of Reel to recommended pool
        let recCategory = reel.category;
        
        // Map some categories together to fit pool domains
        if (recCategory === "Career") recCategory = "Career";
        if (recCategory === "Java") recCategory = "Java";
        if (recCategory === "Software Engineering") recCategory = "Software Engineering";
        if (reel.title.includes("index") || reel.title.includes("LeetCode")) recCategory = "DSA";
        
        // Grab main recommendation base
        const currentDifficulty = overallDifficulty; // Align to overall user level
        let targetRec = RECOMMENDATIONS_POOL[recCategory]?.[currentDifficulty];
        
        // Fallback checks
        if (!targetRec) {
            // Find any category that matches
            const availableCategories = Object.keys(RECOMMENDATIONS_POOL);
            const randomCat = availableCategories[index % availableCategories.length];
            targetRec = RECOMMENDATIONS_POOL[randomCat][currentDifficulty];
        }
        
        // Semantic adjustments to avoid exact title duplication across multiple rows
        let finalRecTitle = targetRec.title;
        let finalRecWhy = targetRec.why;
        let finalCategoryName = targetRec.category;
        
        if (recommendationsUsed.has(finalRecTitle)) {
            // Pick other difficulty level or standard alternative
            const diffs = ["Intermediate", "Advanced", "Beginner"];
            let foundAlt = false;
            for (const d of diffs) {
                const altRec = RECOMMENDATIONS_POOL[recCategory]?.[d];
                if (altRec && !recommendationsUsed.has(altRec.title)) {
                    finalRecTitle = altRec.title;
                    finalRecWhy = altRec.why;
                    finalCategoryName = altRec.category;
                    foundAlt = true;
                    break;
                }
            }
            // If still duplicate, try a secondary HLD/System scaling fallback
            if (!foundAlt) {
                const altRec = RECOMMENDATIONS_POOL["HLD"][currentDifficulty];
                finalRecTitle = altRec.title;
                finalRecWhy = altRec.why;
                finalCategoryName = altRec.category;
            }
        }
        
        recommendationsUsed.add(finalRecTitle);
        
        // Build "Why Interest Detected" explanation based on engagement
        const interestDetected = getDomainMapping(reel.category);
        let whyInterest = "";
        const verbList = reel.engagement.saved ? "saving and bookmarking" : (reel.engagement.liked ? "liking and watching" : "watching");
        
        if (reel.category === "Java") {
            whyInterest = `The student showed explicit interest in Java syntax and environment mechanics by ${verbList} this Reel. The engagement profile indicates they are ready to transition from debugging code templates to building enterprise software.`;
        } else if (reel.category === "Career") {
            whyInterest = `Through ${verbList} this career lifestyle vlog, the student reveals a strong latent interest in software engineer workflows and company culture. The underlying intent is learning what professional software developers do daily.`;
        } else if (reel.category === "Software Engineering") {
            whyInterest = `Engaging deeply with software development content indicates a career-oriented developer focus. The student is evaluating developer methodologies and workspace optimization strategies.`;
        } else if (reel.category === "Hardware") {
            whyInterest = `The student spent time ${verbList} computer component assembly. This signals a curiosity about processor architectures, hardware resources, and physical hardware assembly configurations.`;
        } else if (reel.category === "AI") {
            whyInterest = `Interacting with artificial intelligence scripts indicates the student wants to leverage machine learning tools. They are ready to build LLM integrations beyond basic prompting tricks.`;
        } else if (reel.category === "Cybersecurity") {
            whyInterest = `Watching ethical hacking tools and exploit simulations reveals a strong interest in cyber defense. The student is ready to study secure coding architectures and server-side encryption.`;
        } else if (reel.category === "Cloud") {
            whyInterest = `The student's interest in isolated environments and cloud services demonstrates a focus on devops and site reliability. They are ready to move from simple Docker files to fleet scheduling.`;
        } else {
            whyInterest = `The student's continuous interaction with algorithmic concepts signals a focus on core computer science foundations. This sets up an ideal path to study performance bounds in production networks.`;
        }
        
        // Build "Why Recommendation" detail
        let whyRecommendation = "";
        if (finalCategoryName === "Java") {
            whyRecommendation = `Instead of consuming memes about production failures, the student is directed to structured Spring Boot API architectures. This elevates their Java skills into backend project engineering.`;
        } else if (finalCategoryName === "Career") {
            whyRecommendation = `Bridges their curiosity about developer lifestyles with the exact evaluation mechanisms engineering teams use during recruiting loops. This provides highly practical career value.`;
        } else if (finalCategoryName === "Software Engineering") {
            whyRecommendation = `Provides practical development guidelines by explaining API structuring, REST parameters, and secure HTTP interfaces. This helps build clean programming habits.`;
        } else if (finalCategoryName === "Hardware") {
            whyRecommendation = `Translates high-level GPU specs or PC building montages into a clean computer architecture analysis. It shows the student how chips fetch register instructions.`;
        } else if (finalCategoryName === "AI") {
            whyRecommendation = `Rather than highlighting basic AI prompt hacks, this recommendation provides code implementations for LangChain and vector indexes, preparing them for engineering AI products.`;
        } else if (finalCategoryName === "Cybersecurity") {
            whyRecommendation = `Takes personal security browser tools and elevates them to professional web security design, covering authentication token risks and security headers.`;
        } else if (finalCategoryName === "Cloud") {
            whyRecommendation = `Moves past simple virtual server setups to teach structural cloud models, comparing Lambdas and container networks. This supports modern deployment workflows.`;
        } else if (finalCategoryName === "DSA") {
            whyRecommendation = `Demystifies abstract academic algorithms by mapping runtime complexity back to server bottlenecking. This shows the practical value of engineering algorithms.`;
        } else {
            whyRecommendation = `Explains distributed server engineering and load distribution models, demonstrating how production systems process massive traffic volumes.`;
        }
        
        // Push structured output for raw markdown compilation
        formattedOutputs.push({
            id: reel.id,
            title: reel.title,
            interest: interestDetected,
            whyInterest,
            recTitle: finalRecTitle,
            recCategory: finalCategoryName,
            whyRec: whyRecommendation,
            difficulty: currentDifficulty,
            confidence: reel.confidence
        });
        
        // Render block to UI
        const block = document.createElement("div");
        block.className = "rec-block";
        block.innerHTML = `
            <div class="rec-watched-side">
                <div class="rec-section-title watched-title">
                    <i class="fa-solid fa-play"></i> Watched Reel ${reel.id}
                </div>
                <h4 class="rec-item-title">${reel.title}</h4>
                <div class="rec-meta-tags">
                    <span class="rec-tag">${reel.category}</span>
                    <span class="rec-tag rec-tag-conf-${reel.confidence.toLowerCase()}">Signal: ${reel.confidence}</span>
                </div>
                <p class="rec-text-para"><span class="rec-text-parastrong">Latent Interest:</span> ${interestDetected}</p>
                <div class="rec-reasoning-box">
                    <p class="rec-text-para"><span class="rec-text-parastrong">Evidence:</span> ${whyInterest}</p>
                </div>
            </div>
            
            <div class="rec-recommended-side">
                <div>
                    <div class="rec-section-title rec-title">
                        <i class="fa-solid fa-forward-step"></i> Recommended Next Reel
                    </div>
                    <h4 class="rec-item-title">${finalRecTitle}</h4>
                    <div class="rec-meta-tags">
                        <span class="rec-tag rec-tag-category">${finalCategoryName}</span>
                        <span class="rec-tag rec-tag-diff-${currentDifficulty.toLowerCase()}">Level: ${currentDifficulty}</span>
                    </div>
                    <p class="rec-text-para"><span class="rec-text-parastrong">Curated Value:</span> ${whyRecommendation}</p>
                </div>
                <div class="rec-reasoning-box" style="border-left: 2px solid var(--color-secondary);">
                    <p class="rec-text-para"><span class="rec-text-parastrong">Recommendation Logic:</span> Matches skill level of [${currentDifficulty}] based on their overall scrolling profile. Combines contextual categories to expand rather than loop interests.</p>
                </div>
            </div>
        `;
        recommendationsContainer.appendChild(block);
    });
    
    // 6. Build the raw markdown report text
    buildMarkdownReport(formattedOutputs);
    
    // 7. Render SVG Reasoning Network Graph
    renderSVGGraph(strongestInterest, formattedOutputs);
}

// Render SVG interactive graph coordinates
function renderSVGGraph(latentInterest, formattedOutputs) {
    const svg = document.getElementById("reasoning-svg");
    svg.innerHTML = ""; // Clear
    
    const svgWidth = svg.clientWidth || 700;
    const svgHeight = svg.clientHeight || 280;
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    
    // Draw connections lines first so they render under the circles
    const watchedCoords = [];
    const recCoords = [];
    
    // Nodes calculation parameters
    const totalWatched = formattedOutputs.length;
    const uniqueRecs = [...new Set(formattedOutputs.map(o => o.recTitle))];
    const totalRecs = uniqueRecs.length;
    
    // 1. Calculate positions for inner watched node ring (Radius = 75)
    for (let i = 0; i < totalWatched; i++) {
        const angle = (i * 2 * Math.PI) / totalWatched - Math.PI/2;
        const x = centerX + 80 * Math.cos(angle);
        const y = centerY + 70 * Math.sin(angle);
        watchedCoords.push({ x, y, id: formattedOutputs[i].id, title: formattedOutputs[i].title, recTitle: formattedOutputs[i].recTitle });
    }
    
    // 2. Calculate positions for outer recommended node ring (Radius = 175)
    for (let i = 0; i < totalRecs; i++) {
        const angle = (i * 2 * Math.PI) / totalRecs - Math.PI/2 + 0.3; // slightly offset to prevent overlaps
        const x = centerX + 185 * Math.cos(angle);
        const y = centerY + 105 * Math.sin(angle);
        recCoords.push({ x, y, title: uniqueRecs[i] });
    }
    
    // Define SVG Marker Arrows
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
        <marker id="arrow-to-center" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(138, 43, 226, 0.4)"/>
        </marker>
        <marker id="arrow-to-outer" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0, 240, 255, 0.4)"/>
        </marker>
    `;
    svg.appendChild(defs);
    
    // 3. Draw connection lines: Center <-> Watched Reels
    watchedCoords.forEach(node => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", node.x);
        line.setAttribute("y1", node.y);
        line.setAttribute("x2", centerX);
        line.setAttribute("y2", centerY);
        line.setAttribute("stroke", "rgba(138, 43, 226, 0.3)");
        line.setAttribute("stroke-width", "1.5");
        line.setAttribute("class", "node-link");
        line.setAttribute("marker-end", "url(#arrow-to-center)");
        svg.appendChild(line);
    });
    
    // 4. Draw connection lines: Watched Reels <-> CURATED Recommendations
    watchedCoords.forEach(watchedNode => {
        // Find coordinate of matched recommendation
        const targetRec = recCoords.find(r => r.title === watchedNode.recTitle);
        if (targetRec) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", watchedNode.x);
            line.setAttribute("y1", watchedNode.y);
            line.setAttribute("x2", targetRec.x);
            line.setAttribute("y2", targetRec.y);
            line.setAttribute("stroke", "rgba(0, 240, 255, 0.35)");
            line.setAttribute("stroke-width", "1.5");
            line.setAttribute("class", "node-link");
            line.setAttribute("style", "animation-duration: 10s;");
            line.setAttribute("marker-end", "url(#arrow-to-outer)");
            svg.appendChild(line);
        }
    });
    
    // 5. Draw center root node (Latent Interest Core)
    const centerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centerCircle.setAttribute("cx", centerX);
    centerCircle.setAttribute("cy", centerY);
    centerCircle.setAttribute("r", "16");
    centerCircle.setAttribute("fill", "var(--bg-base)");
    centerCircle.setAttribute("stroke", "var(--color-secondary)");
    centerCircle.setAttribute("stroke-width", "3.5");
    centerCircle.setAttribute("class", "node-circle root");
    
    // Shorten title if too long to render in center
    let labelText = latentInterest.split(" ")[0];
    if (labelText.length > 8) labelText = labelText.substring(0, 10) + "...";
    
    const centerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    centerText.setAttribute("x", centerX);
    centerText.setAttribute("y", centerY + 4);
    centerText.setAttribute("class", "graph-label center-node");
    centerText.textContent = labelText;
    
    // Tooltip for center
    const centerTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
    centerTitle.textContent = `Latent Interest: ${latentInterest}`;
    centerGroup.appendChild(centerTitle);
    
    centerGroup.appendChild(centerCircle);
    centerGroup.appendChild(centerText);
    svg.appendChild(centerGroup);
    
    // 6. Draw Watched Node circles
    watchedCoords.forEach(node => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", "7.5");
        circle.setAttribute("fill", "var(--color-primary)");
        circle.setAttribute("stroke", "rgba(255, 255, 255, 0.4)");
        circle.setAttribute("stroke-width", "1.5");
        circle.setAttribute("class", "node-circle");
        
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y - 12);
        text.setAttribute("class", "graph-label");
        text.setAttribute("fill", "var(--text-muted)");
        text.textContent = node.id;
        
        const nodeTooltip = document.createElementNS("http://www.w3.org/2000/svg", "title");
        nodeTooltip.textContent = `Watched: ${node.title}`;
        group.appendChild(nodeTooltip);
        
        group.appendChild(circle);
        group.appendChild(text);
        svg.appendChild(group);
    });
    
    // 7. Draw Recommendation Node circles
    recCoords.forEach(node => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", "7.5");
        circle.setAttribute("fill", "var(--color-accent)");
        circle.setAttribute("stroke", "rgba(255, 255, 255, 0.4)");
        circle.setAttribute("stroke-width", "1.5");
        circle.setAttribute("class", "node-circle");
        
        // Show truncated title above recommendation node
        const shortenedTitle = node.title.length > 20 ? node.title.substring(0, 18) + "..." : node.title;
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y - 12);
        text.setAttribute("class", "graph-label");
        text.setAttribute("fill", "var(--text-main)");
        text.style.fontWeight = "600";
        text.textContent = shortenedTitle;
        
        const nodeTooltip = document.createElementNS("http://www.w3.org/2000/svg", "title");
        nodeTooltip.textContent = `Recommended: ${node.title}`;
        group.appendChild(nodeTooltip);
        
        group.appendChild(circle);
        group.appendChild(text);
        svg.appendChild(group);
    });
}

// Render Interest Breakdown percentage bars
function renderBreakdownBars(domainWeights) {
    breakdownBars.innerHTML = "";
    
    // Find sum
    let sum = 0;
    for (const w of Object.values(domainWeights)) {
        sum += w;
    }
    
    // Sort domains
    const sorted = Object.entries(domainWeights).sort((a,b) => b[1] - a[1]);
    
    sorted.forEach(([domain, weight]) => {
        const percent = sum > 0 ? Math.round((weight / sum) * 100) : 0;
        
        const barItem = document.createElement("div");
        barItem.className = "breakdown-bar-item";
        barItem.innerHTML = `
            <div class="breakdown-bar-info">
                <span>${domain}</span>
                <span>${percent}%</span>
            </div>
            <div class="breakdown-bar-bg">
                <div class="breakdown-bar-fill" style="width: ${percent}%;"></div>
            </div>
        `;
        breakdownBars.appendChild(barItem);
    });
}

// Build exact plain text markdown report format
function buildMarkdownReport(formattedOutputs) {
    let md = "";
    
    formattedOutputs.forEach(item => {
        md += `**CURRENT REEL:** ${item.id} - ${item.title}\n\n`;
        md += `**INTEREST DETECTED:** ${item.interest}\n\n`;
        md += `**WHY:** ${item.whyInterest}\n\n`;
        md += `**RECOMMENDED TECH REEL:** ${item.recTitle}\n\n`;
        md += `**CATEGORY:** ${item.recCategory}\n\n`;
        md += `**WHY THIS RECOMMENDATION:** ${item.whyRec}\n\n`;
        md += `**DIFFICULTY:** ${item.difficulty}\n\n`;
        md += `**CONFIDENCE:** ${item.confidence}\n\n`;
        md += `---\n\n`;
    });
    
    markdownTextarea.value = md.trim();
}

// Show feedback toasts
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove("hide");
    
    setTimeout(() => {
        toast.classList.add("hide");
    }, 2800);
}

// Run app init
window.onload = init;
