const cases = [
    {
        name: 'Caso Mousse',
        description: 'No último dia 10, uma loja foi roubada e o dono assassinado',
        nextSteps: 'Já foram encontradas 2 pistas que nos apontará qual dos suspeitos cometeu o crime. Investigue e nos informe o mais rápido possível!',
        suspects: [
            'Sthephan Clir',
            'Breck Vlam'
        ],
        progress: 33,
        levelId: '000',
    },
    {
        name: 'Caso Mousse',
        description: 'No último dia 10, uma loja foi roubada e o dono assassinado',
        nextSteps: 'Já foram encontradas 2 pistas que nos apontará qual dos suspeitos cometeu o crime. Investigue e nos informe o mais rápido possível!',
        suspects: [
            'Sthephan Clir',
            'Breck Vlam'
        ],
        progress: 33,
        levelId: '001',
    },
    {
        name: 'Caso Mousse',
        description: 'No último dia 10, uma loja foi roubada e o dono assassinado',
        nextSteps: 'Já foram encontradas 2 pistas que nos apontará qual dos suspeitos cometeu o crime. Investigue e nos informe o mais rápido possível!',
        suspects: [
            'Sthephan Clir',
            'Breck Vlam'
        ],
        progress: 33,
        levelId: '002',
    },
    {
        name: 'Caso Mousse',
        description: 'No último dia 10, uma loja foi roubada e o dono assassinado',
        nextSteps: 'Já foram encontradas 2 pistas que nos apontará qual dos suspeitos cometeu o crime. Investigue e nos informe o mais rápido possível!',
        suspects: [
            'Sthephan Clir',
            'Breck Vlam'
        ],
        progress: 33,
        levelId: '003',
    },

]

//--- GLOBAL VARIABLES ---//
// Bool - if level is selected
let levelSelected = false;

function cardSelector(id) {
    document.getElementById('level-0').className = "case-page case";
    document.getElementById('level-1').className = "case-page case";
    document.getElementById('level-2').className = "case-page case";
    document.getElementById('level-3').className = "case-page case";

    let selected = document.getElementById(`${id}`)
    selected.className += " selected";

    generatePlayButton(id)
}

function generate_cases(cases) {
    let casesListHolder = document.getElementById('casesList');
    for (i = 0; i < cases.length; i++) {
        /*
            Elements order and inheritance
            
            caseCointainer
            |-caseRowHeader
            | |-caseImg
            | | |-image
            | |-caseDescription
            | | |-caseTitle
            | | |-caseDescriptionText
            |-caseSteps
            | |-caseStepsTitle
            | |-caseStepsText
            |-caseRowMidle
            | |-caseSuspects
            | | |-caseSuspectsTitle
            | | |-[n]suspectName
            | |-caseSignature
            | | |-caseSignatureTitle
            | | |-signatureImage
            |-caseProgress
            | |-caseProgressTitle
            | |-caseProgressBar
        */

        let caseCointainer = document.createElement('DIV');
        caseCointainer.className = "case-page case";
        caseCointainer.id = `level-${i}`;
        caseCointainer.onclick = () => {cardSelector(caseCointainer.id)};
        let levelIdAttribute = document.createAttribute("levelId");
        levelIdAttribute.value = cases[i].levelId;
        caseCointainer.setAttributeNode(levelIdAttribute);

        let caseRowHeader = document.createElement('DIV');
        caseRowHeader.className = "case-row";

        let caseImg = document.createElement('DIV');
        caseImg.className = "case-image";

        let image = document.createElement('IMG');
        image.src = "./images/level_select/case_image_1.png";
        image.alt = "Case image";

        let caseDescription = document.createElement('DIV');
        caseDescription.className = "case-description";

        let caseTitle = document.createElement('H3');
        caseTitle.innerHTML = `${cases[i].name}`

        let caseDescriptionText = document.createElement('P');
        caseDescriptionText.innerHTML = `${cases[i].description}`

        let caseSteps = document.createElement('DIV');
        caseSteps.className = "case-steps";

        let caseStepsTitle = document.createElement('H3');
        caseStepsTitle.innerHTML = `Os próximos passos:`

        let caseStepsText = document.createElement('P');
        caseStepsText.innerHTML = `${cases[i].nextSteps}`

        let caseRowMidle = document.createElement('DIV');
        caseRowMidle.className = "case-row";

        let caseSuspects = document.createElement('DIV');
        caseSuspects.className = "case-suspects";

        let caseSuspectsTitle = document.createElement('H3');
        caseSuspectsTitle.innerHTML = "Suspeitos";

        let caseSuspectArray = [];
        for (j = 0; j < cases[i].suspects.length; j++) {
            let caseSuspectName = document.createElement('P');
            caseSuspectName.innerHTML = `> ${cases[i].suspects[j]}`

            caseSuspectArray.push(caseSuspectName);
        }

        let caseSignature = document.createElement('DIV');
        caseSignature.className = "case-signature";

        let caseSignatureTitle = document.createElement('H3');
        caseSignatureTitle.innerHTML = "Assinatura";

        let caseSignatureImage = document.createElement('IMG');
        caseSignatureImage.src = "./images/level_select/case_signature_1.png";
        caseSignatureImage.alt = "Assinado";

        let caseProgress = document.createElement('DIV');
        caseProgress.className = "case-progress";

        let caseProgressTitle = document.createElement('H3');
        caseProgressTitle.innerHTML = "Progresso";

        let caseProgressBar = document.createElement('PROGRESS');
        caseProgressBar.value = cases[i].progress;
        caseProgressBar.max = "100";
        caseProgressBar.innerHTML = `${cases[i].progress}%`;

        caseImg.appendChild(image);

        caseDescription.appendChild(caseTitle);
        caseDescription.appendChild(caseDescriptionText);

        caseRowHeader.appendChild(caseImg);
        caseRowHeader.appendChild(caseDescription);

        caseCointainer.appendChild(caseRowHeader);

        caseSteps.appendChild(caseStepsTitle);
        caseSteps.appendChild(caseStepsText);

        caseCointainer.appendChild(caseSteps);

        caseSuspects.appendChild(caseSuspectsTitle);
        for (j = 0; j < caseSuspectArray.length; j++) {
            caseSuspects.appendChild(caseSuspectArray[j]);
        }

        caseSignature.appendChild(caseSignatureTitle);
        caseSignature.appendChild(caseSignatureImage);

        caseRowMidle.appendChild(caseSuspects);
        caseRowMidle.appendChild(caseSignature);

        caseProgress.appendChild(caseProgressTitle);
        caseProgress.appendChild(caseProgressBar);

        caseCointainer.appendChild(caseRowMidle);
        caseCointainer.appendChild(caseProgress);

        casesListHolder.appendChild(caseCointainer);
    }
}

generate_cases(cases);


function generatePlayButton(id) {
    let levelId = document.getElementById(`${id}`).getAttribute('levelId');

    try {
        let playButton = document.getElementById('playButton');
        playButton.onclick = () => {onPlayClick(levelId)};
    }
    catch {
        let playButtonHolder = document.createElement('DIV');
        playButtonHolder.id = 'playButton';
        playButtonHolder.className = "play-button";
        playButtonHolder.onclick = () => {onPlayClick(levelId)};
    
        let caseRowHeader = document.createElement('IMG');
        caseRowHeader.alt = "Jogar Caso 1";
        caseRowHeader.src = "./images/level_select/Jogar 1.png";
    
        playButtonHolder.appendChild(caseRowHeader);
    
        document.getElementById('buttonHolder').appendChild(playButtonHolder);
    }
}

function onPlayClick(levelId) {
    console.log(levelId);
}