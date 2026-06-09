/**
 * 生命灵数计算器 - Life Path Number
 * Core logic, data, and UI interactions.
 */

// --- 1. Data: Full Meanings for Numbers 1-9 and Master Numbers 11, 22, 33 ---
const NUMBER_DATA = {
    1: {
        title: "领导者",
        tagline: "独立、果断、有开创精神",
        desc: "你天生具有领导潜质，渴望独立自主。你具有强大的意志力和目标感，不畏困难，敢于在未知领域开辟道路。你喜欢掌控局面，但也可能表现出固执或过于自我。",
        traits: [
            { label: "核心特质", value: "独立性、自主性、勇气" },
            { label: "优势", value: "决策果断、执行力强、创新" },
            { label: "挑战", value: "过度控制、缺乏耐性、自我中心" },
            { label: "适合职业", value: "创业者、管理层、开拓者" }
        ],
        element: "火 (Fire)"
    },
    2: {
        title: "协调者",
        tagline: "温和、善解人意、重视合作",
        desc: "你是天生的合作者与和平使者。你具有敏锐的直觉和极强的同理心，能够洞察他人未言明的情感。你追求和谐与平衡，是团队中不可或缺的粘合剂。",
        traits: [
            { label: "核心特质", value: "敏感、平衡、协作" },
            { label: "优势", value: "外交手段、耐心、细致" },
            { label: "挑战", value: "优柔寡断、过度敏感、依赖性" },
            { label: "适合职业", value: "心理咨询、外交官、协调员" }
        ],
        element: "水 (Water)"
    },
    3: {
        title: "表达者",
        tagline: "充满创意、幽默与表达力",
        desc: "你拥有旺盛的生命力和创造力。你擅长使用语言、艺术或肢体来表达自我，总是能为周围带来快乐和活力。你热爱社交，生活充满了色彩。",
        traits: [
            { label: "核心特质", value: "创意、乐观、社交" },
            { label: "优势", value: "沟通力强、想象力丰富、幽默感" },
            { label: "挑战", value: "缺乏专注、情绪化、表面化" },
            { label: "适合职业", value: "艺术家、演说家、营销专家" }
        ],
        element: "风 (Air/Creative)"
    },
    4: {
        title: "实干者",
        tagline: "勤奋、务实、有责任感",
        desc: "你是大地的基石，以踏实、稳重和逻辑性著称。你崇尚秩序与纪律，相信通过不断的努力和系统性的方法可以达成任何目标。你是最值得信赖的人。",
        traits: [
            { label: "核心特质", value: "稳定、逻辑、组织" },
            { label: "优势", value: "高度自律、可靠、务实" },
            { label: "挑战", value: "墨守成规、过度保守、刻板" },
            { label: "适合职业", value: "工程师、会计、管理专家" }
        ],
        element: "土 (Earth)"
    },
    5: {
        title: "冒险者",
        tagline: "热爱自由、灵活多变",
        desc: "你渴望体验生命的多样性。你讨厌束缚，喜欢变化、旅行和新的挑战。你具有极强的适应能力，是天生的探索者，永远在寻找下一个刺激点。",
        traits: [
            { label: "核心特质", value: "自由、变化、感官" },
            { label: "优势", value: "适应力强、多才多艺、灵活" },
            { label: "挑战", value: "缺乏耐性、难以定性、冲动" },
            { label: "适合职业", value: "旅行博主、销售、自由职业" }
        ],
        element: "风 (Air)"
    },
    6: {
        title: "守护者",
        tagline: "关爱他人、重视家庭",
        desc: "你拥有极强的责任感和奉献精神。你天生具有照顾他人的本能，无论是家庭还是社区，你总是那个提供支持和温暖的人。你追求美与和谐。",
        traits: [
            { label: "核心特质", value: "责任、爱、和谐" },
            { label: "优势", value: "同理心强、奉献、可靠" },
            { label: "挑战", value: "过度干涉、完美主义、自我牺牲" },
            { label: "适合职业", value: "教师、医生、社会工作者" }
        ],
        element: "水 (Water)"
    },
    7: {
        title: "智者",
        tagline: "深思熟虑、追求真理",
        desc: "你是一个天生的观察者和思想家。你对宇宙的真相、科学或精神层面的奥秘有着浓厚的兴趣。你更喜欢独处来思考，追求内在的智慧与深度。",
        traits: [
            { label: "核心特质", value: "分析、精神、直觉" },
            { label: "优势", value: "洞察力强、逻辑严密、专注" },
            { label: "挑战", value: "过于孤僻、怀疑论、过度分析" },
            { label: "适合职业", value: "科研人员、哲学家、数据分析师" }
        ],
        element: "风 (Air/Spirit)"
    },
    8: {
        title: "实现者",
        tagline: "追求成功与财富",
        desc: "你对物质世界的成就和权力的掌控有着天然的直觉。你极具商业头脑，懂得如何利用资源来实现目标，是一个能够将梦想转化为物质现实的人。",
        traits: [
            { label: "核心特质", value: "成就、权力、物质" },
            { label: "优势", value: "领导力、组织力、执行力" },
            { label: "挑战", value: "过于追求权力、物质主义、固执" },
            { label: "适合职业", value: "企业家、金融家、律师" }
        ],
        element: "土 (Earth)"
    },
    9: {
        title: "人道者",
        tagline: "富有同情心与世界观",
        desc: "你是一个怀揣博爱精神的人。你的视角往往超越个人利益，关注全人类的福祉。你具有深邃的智慧和强烈的正义感，致力于让世界变得更好。",
        traits: [
            { label: "核心特质", value: "包容、博爱、智慧" },
            { label: "优势", value: "大局观、慈悲心、灵性" },
            { label: "挑战", result: "情绪波动、理想主义过重、难以放下" },
            { label: "适合职业", value: "慈善家、艺术家、社会教育者" }
        ],
        element: "火 (Fire/Spirit)"
    },
    // Master Numbers
    11: {
        title: "启发者 ✦",
        tagline: "高度直觉与灵性引导",
        isMaster: true,
        desc: "作为主数字，你承载着比普通数字更高的能量。你具有非凡的直觉力和灵感，能够感知到常人察觉不到的细微能量。你的一生往往与灵性觉醒、传播真理有关。",
        traits: [
            { label: "核心特质", value: "灵感、直觉、直觉" },
            { label: "优势", value: "先驱性、洞察力、启发性" },
            { label: "挑战", value: "神经紧张、高度敏感、情绪起伏" },
            { label: "适合职业", value: "精神导师、艺术家、创新思想家" }
        ],
        element: "灵性 (Spiritual)"
    },
    22: {
        title: "建筑师 ✦",
        tagline: "将愿景化为具体成果",
        isMaster: true,
        desc: "你被称为“大师建造者”。你结合了数字 4 的务实和数字 11 的愿景。你有能力将宏大的理想转化为现实的社会建设。你的一生可能涉及大规模的创造和变革。",
        traits: [
            { label: "核心特质", value: "宏图、执行、建设" },
            { label: "优势", value: "领导力、组织、实现愿景" },
            { label: "挑战", value: "巨大的压力、完美主义、掌控欲" },
            { label: "适合职业", value: "大型项目经理、社会改革者、建筑师" }
        ],
        element: "土/灵 (Earth/Spirit)"
    },
    33: {
        title: "大爱者 ✦",
        tagline: "无私奉献与慈悲",
        isMaster: true,
        desc: "这是最高频率的能量。你致力于超越自我的利他主义，通过爱和慈悲来疗愈世界。你的使命是服务于更高层面的生命，成为一个灵魂的引路人。",
        traits: [
            { label: "核心特质", value: "无私、慈悲、疗愈" },
            { label: "优势", value: "极端同理心、导师气质、感召力" },
            { label: "挑战", value: "过度牺牲、情感耗竭、责任过重" },
            { label: "适合职业", value: "导师、慈善领袖、疗愈师" }
        ],
        element: "灵性 (Universal Love)"
    }
};

// --- 2. Core Logic: Calculation Engine ---

/**
 * Reduces a number to a single digit or a Master Number (11, 22, 33).
 * @param {number} num 
 * @returns {number}
 */
function reduceToSingle(num) {
    while (num > 9) {
        // Check if it's a master number before reducing further
        if (num === 11 || num === 22 || num === 33) return num;

        const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        num = sum;
    }
    return num;
}

/**
 * The proper Numerology method:
 * 1. Reduce Month, Day, and Year separately.
 * 2. Sum the results.
 * 3. Reduce the final sum.
 * @param {number} y, m, d 
 * @returns {object} { number: number, breakdown: string }
 */
function calculateLifePath(y, m, d) {
    // 1. Reduce Month
    let monthVal = reduceToSingle(m);
    let monthBreakdown = m.toString();
    if (m > 9) monthBreakdown += ` → ${monthVal}`;

    // 2. Reduce Day
    let dayVal = reduceToSingle(d);
    let dayBreakdown = d.toString();
    if (d > 9) dayBreakdown += ` → ${dayVal}`;

    // 3. Reduce Year
    let yearSum = y.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    let yearVal = reduceToSingle(yearSum);
    let yearBreakdown = y.toString() + ` → ${yearSum}`;
    if (yearSum > 9 && yearSum !== yearVal) {
        yearBreakdown += ` → ${yearVal}`;
    }

    // 4. Final Sum
    const finalSumRaw = monthVal + dayVal + yearVal;
    const lifePathNumber = reduceToSingle(finalSumRaw);

    let breakdownText = `年：${yearBreakdown}<br>`;
    breakdownText += `月：${monthBreakdown}<br>`;
    breakdownText += `日：${dayBreakdown}<br>`;
    breakdownText += `总和：${monthVal} + ${dayVal} + ${yearVal} = ${finalSumRaw}`;
    if (finalSumRaw > 9 && finalSumRaw !== lifePathNumber) {
        breakdownText += ` → <strong>${lifePathNumber}</strong>`;
    } else {
        breakdownText += ` → <strong>${lifePathNumber}</strong>`;
    }

    return {
        number: lifePathNumber,
        breakdown: breakdownText
    };
}

// --- 3. UI Logic: DOM Interaction ---

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Event Listeners
    const calculateBtn = document.getElementById('calculate-btn');
    const cards = document.querySelectorAll('.number-card');

    calculateBtn.addEventListener('click', handleCalculation);

    // Card Click Interaction
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const num = parseInt(card.getAttribute('data-num'));
            showResult(num); // Clicking card acts as a quick viewer
        });
    });

    // Input Interactivity (Enter key support)
    const inputs = document.querySelectorAll('.date-field input');
    inputs.forEach((input, idx) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (idx < inputs.length - 1) {
                    inputs[idx + 1].focus();
                } else {
                    handleCalculation();
                }
            }
        });
    });
});

/**
 * Main event handler for the calculate button
 */
function handleCalculation() {
    const y = parseInt(document.getElementById('year').value, 10);
    const m = parseInt(document.getElementById('month').value, 10);
    const d = parseInt(document.getElementById('day').value, 10);

    // Validation
    if (isNaN(y) || isNaN(m) || isNaN(d)) {
        alert("请完整输入年份、月份和日期 ✨");
        return;
    }

    if (m < 1 || m > 12 || d < 1 || d > 31) {
        alert("日期输入似乎有问题，请检查月份和日期是否有效 📅");
        return;
    }

    // Perform Calculation
    const result = calculateLifePath(y, m, d);

    // Show Results
    showResult(result.number, result.breakdown);
}

/**
 * Updates the UI with calculation results
 * @param {number} num - The Life Path Number
 * @param {string} [breakdownText] - Optional formatted breakdown string
 */
function showResult(num, breakdownText) {
    const resultSection = document.getElementById('result-section');
    const lifeNumberEl = document.getElementById('life-number');
    const numberLabelEl = document.getElementById('number-label');
    const breakdownEl = document.getElementById('breakdown');
    const meaningEl = document.getElementById('meaning-content');
    const traitsGridEl = document.getElementById('traits-grid');
    const masterNoteEl = document.getElementById('master-note');
    const data = NUMBER_DATA[num];

    if (!data) return;

    // 1. Basic Info
    lifeNumberEl.textContent = num;
    numberLabelEl.textContent = data.title;
    
    // 2. Breakdown (if provided)
    if (breakdownText) {
        breakdownEl.innerHTML = breakdownText;
        breakdownEl.style.display = 'block';
    } else {
        breakdownEl.style.display = 'none';
    }

    // 3. Meaning & Content
    meaningEl.innerHTML = `
        <div class="tagline">${data.tagline}</div>
        <div class="desc">${data.desc}</div>
    `;

    // 4. Traits Grid
    traitsGridEl.innerHTML = '';
    data.traits.forEach(trait => {
        const item = document.createElement('div');
        item.className = 'trait-item';
        item.innerHTML = `
            <div class="trait-label">${trait.label}</div>
            <div class="trait-value">${trait.value}</div>
        `;
        traitsGridEl.appendChild(item);
    });

    // 5. Master Number Note
    if (data.isMaster) {
        masterNoteEl.innerHTML = `✦ <strong>主数字提醒：</strong> ${data.title} 拥有极其强烈的能量。你可能在人生早期感受到更多的挑战或冲突，但这正是为了磨炼你更高的使命。`;
        masterNoteEl.style.display = 'block';
    } else {
        masterNoteEl.style.display = 'none';
    }

    // 6. UI Animation & Scroll
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 7. Update Grid Highlight
    updateGridHighlight(num);
}

/**
 * Highlights the corresponding card in the all-numbers grid
 * @param {number} num 
 */
function updateGridHighlight(num) {
    const cards = document.querySelectorAll('.number-card');
    cards.forEach(card => {
        const cardNum = parseInt(card.getAttribute('data-num'));
        if (cardNum === num) {
            card.classList.add('active');
            // Scroll to it slightly if needed, or just highlight
        } else {
            card.classList.remove('active');
        }
    });
}
