function playClickSound() {
    const audio = new Audio('audio/click.mp3');
    audio.play();
}

function showInfo(element) {
    const infoText = document.getElementById('info-text');
    const elementInfo = document.getElementById('element-info');
    let info = '';

    const text = infoText[element] || 'Informação não disponível.';
    const popup = document.getElementById('element-info-popup');
    const infoTextElement = document.getElementById('info-text');
    
    if (popup && infoTextElement) {
        infoTextElement.innerText = text;
        popup.style.display = 'flex';
        
        const audio = new Audio('audio/click.mp3');
        audio.play();
    } else {
        console.error('Elementos do pop-up não encontrados.');
    }

    playClickSound();

    switch(element) {
        case 'H':
            info = 'Hidrogênio é um gás leve que ajuda a formar água!';
            break;
        case 'He':
            info = 'Hélio é um gás que faz os balões flutuarem!';
            break;
        case 'Li':
            info = 'Lítio é usado em baterias para seus brinquedos!';
            break;
        case 'Be':
            info = 'Berílio é um metal leve e resistente!';
            break;
        case 'B':
            info = 'Boro é usado em sabões e em alguns vidros especiais!';
            break;
        case 'C':
            info = 'Carbono está em todas as coisas vivas!';
            break;
        case 'N':
            info = 'Nitrogênio é o gás que compõe a maior parte do ar!';
            break;
        case 'O':
            info = 'Oxigênio é o gás que precisamos para respirar!';
            break;
        case 'F':
            info = 'Flúor é usado em cremes dentais para proteger os dentes!';
            break;
        case 'Ne':
            info = 'Neônio é um gás que brilha em letreiros de neon!';
            break;
        case 'Na':
            info = 'Sódio é um metal que se encontra no sal de cozinha!';
            break;
        case 'Mg':
            info = 'Magnésio é um metal que queima com uma luz brilhante!';
            break;
        case 'Al':
            info = 'Alumínio é usado para fazer latas e papel alumínio!';
            break;
        case 'Si':
            info = 'Silício é usado para fazer chips de computador!';
            break;
        case 'P':
            info = 'Fósforo é encontrado em palitos de fósforo!';
            break;
        case 'S':
            info = 'Enxofre cheira mal, como ovos podres!';
            break;
        case 'Cl':
            info = 'Cloro é usado para manter as piscinas limpas!';
            break;
        case 'Ar':
            info = 'Argônio é um gás inerte usado em lâmpadas!';
            break;
        case 'K':
            info = 'Potássio é importante para as bananas e para a saúde!';
            break;
        case 'Ca':
            info = 'Cálcio ajuda a manter os ossos fortes!';
            break;
        case 'Sc':
            info = 'Escândio é um metal raro usado em alguns equipamentos especiais!';
            break;
        case 'Ti':
            info = 'Titânio é um metal muito forte e leve!';
            break;
        case 'V':
            info = 'Vanádio é usado em aço para torná-lo mais forte!';
            break;
        case 'Cr':
            info = 'Cromo dá brilho ao metal usado em carros!';
            break;
        case 'Mn':
            info = 'Manganês é usado para fazer aço mais forte!';
            break;
        case 'Fe':
            info = 'Ferro é o metal usado para fazer pregos e outras coisas de metal!';
            break;
        case 'Co':
            info = 'Cobalto é usado para fazer ímãs!';
            break;
        case 'Ni':
            info = 'Níquel é usado em moedas e baterias!';
            break;
        case 'Cu':
            info = 'Cobre é usado em fios elétricos!';
            break;
        case 'Zn':
            info = 'Zinco é usado para proteger o ferro da ferrugem!';
            break;
        case 'Ga':
            info = 'Gálio é um metal que derrete na sua mão!';
            break;
        case 'Ge':
            info = 'Germânio é usado em eletrônicos, como os computadores!';
            break;
        case 'As':
            info = 'Arsênio pode ser perigoso, mas também tem usos em eletrônicos!';
            break;
        case 'Se':
            info = 'Selênio é usado em copiadoras e fotocélulas!';
            break;
        case 'Br':
            info = 'Bromo é usado em alguns remédios e em piscinas!';
            break;
        case 'Kr':
            info = 'Criptônio é um gás inerte usado em luzes especiais!';
            break;
        case 'Rb':
            info = 'Rubídio é um metal raro e reativo!';
            break;
        case 'Sr':
            info = 'Estrôncio é usado em fogos de artifício vermelhos!';
            break;
        case 'Y':
            info = 'Ítrio é usado em LEDs e fósforos!';
            break;
        case 'Zr':
            info = 'Zircônio é usado em joias e equipamentos médicos!';
            break;
        case 'Nb':
            info = 'Nióbio é usado em aços especiais e supercondutores!';
            break;
        case 'Mo':
            info = 'Molibdênio é usado para endurecer o aço!';
            break;
        case 'Tc':
            info = 'Tecnécio é usado em exames médicos!';
            break;
        case 'Ru':
            info = 'Rutênio é usado em eletrônicos!';
            break;
        case 'Rh':
            info = 'Ródio é usado em catalisadores de carros!';
            break;
        case 'Pd':
            info = 'Paládio é usado em joias e eletrônicos!';
            break;
        case 'Ag':
            info = 'Prata é usada em joias e talheres!';
            break;
        case 'Cd':
            info = 'Cádmio é usado em baterias!';
            break;
        case 'In':
            info = 'Índio é usado em telas de toque!';
            break;
        case 'Sn':
            info = 'Estanho é usado para revestir latas!';
            break;
        case 'Sb':
            info = 'Antimônio é usado em baterias e chamas retardadoras!';
            break;
        case 'Te':
            info = 'Telúrio é usado em painéis solares!';
            break;
        case 'I':
            info = 'Iodo é usado em antissépticos para feridas!';
            break;
        case 'Xe':
            info = 'Xenônio é um gás inerte usado em lâmpadas especiais!';
            break;
        case 'Cs':
            info = 'Césio é usado em relógios atômicos!';
            break;
        case 'Ba':
            info = 'Bário é usado em exames de raios-X!';
            break;
        case 'La':
            info = 'Lantânio é usado em lentes de câmeras!';
            break;
        case 'Ce':
            info = 'Cério é usado em isqueiros e lâmpadas!';
            break;
        case 'Pr':
            info = 'Praseodímio é usado em ligas de magnésio!';
            break;
        case 'Nd':
            info = 'Neodímio é usado em ímãs poderosos!';
            break;
        case 'Pm':
            info = 'Promécio é usado em luzes e baterias especiais!';
            break;
        case 'Sm':
            info = 'Samário é usado em ímãs e lasers!';
            break;
        case 'Eu':
            info = 'Európio é usado em telas de TV para produzir a cor vermelha!';
            break;
        case 'Gd':
            info = 'Gadolínio é usado em exames de ressonância magnética!';
            break;
        case 'Tb':
            info = 'Térbio é usado em fósforos e lâmpadas fluorescentes!';
            break;
        case 'Dy':
            info = 'Disprósio é usado em ímãs e lasers!';
            break;
        case 'Ho':
            info = 'Hólmio é usado em ímãs super poderosos!';
            break;
        case 'Er':
            info = 'Érbio é usado em fibras ópticas e lasers!';
            break;
        case 'Tm':
            info = 'Túlio é usado em aparelhos de raios-X portáteis!';
            break;
        case 'Yb':
            info = 'Itérbio é usado em lasers e detectores de radiação!';
            break;
        case 'Lu':
            info = 'Lutécio é usado em exames de tomografia por emissão de pósitrons!';
            break;
        case 'Hf':
            info = 'Háfnio é usado em reatores nucleares!';
            break;
        case 'Ta':
            info = 'Tântalo é usado em eletrônicos, como capacitores!';
            break;
        case 'W':
            info = 'Tungstênio é usado em filamentos de lâmpadas!';
            break;
        case 'Re':
            info = 'Rênio é usado em motores a jato!';
            break;
        case 'Os':
            info = 'Ósmio é um dos metais mais densos e é usado em canetas-tinteiro!';
            break;
        case 'Ir':
            info = 'Irídio é usado em velas de ignição e joias!';
            break;
        case 'Pt':
            info = 'Platina é usada em joias e catalisadores de carros!';
            break;
        case 'Au':
            info = 'Ouro é usado em joias e moedas!';
            break;
        case 'Hg':
            info = 'Mercúrio é usado em termômetros e lâmpadas fluorescentes!';
            break;
        case 'Tl':
            info = 'Tálio é usado em eletrônicos e remédios!';
            break;
        case 'Pb':
            info = 'Chumbo é usado em baterias e blindagens contra radiação!';
            break;
        case 'Bi':
            info = 'Bismuto é usado em medicamentos e cosméticos!';
            break;
        case 'Po':
            info = 'Polônio é usado em dispositivos antiestáticos!';
            break;
        case 'At':
            info = 'Astato é um elemento raro e radioativo!';
            break;
        case 'Rn':
            info = 'Radônio é um gás radioativo encontrado no subsolo!';
            break;
        case 'Fr':
            info = 'Frâncio é um metal altamente radioativo!';
            break;
        case 'Ra':
            info = 'Rádio é um metal radioativo usado em tratamentos contra o câncer!';
            break;
        case 'Ac':
            info = 'Actínio é usado em fontes de nêutrons!';
            break;
        case 'Th':
            info = 'Tório é usado em reatores nucleares!';
            break;
        case 'Pa':
            info = 'Protactínio é usado em pesquisas científicas!';
            break;
        case 'U':
            info = 'Urânio é usado em energia nuclear e bombas atômicas!';
            break;
        case 'Np':
            info = 'Neptúnio é usado em detectores de nêutrons!';
            break;
        case 'Pu':
            info = 'Plutônio é usado em armas nucleares e geradores de energia!';
            break;
        case 'Am':
            info = 'Amerício é usado em detectores de fumaça!';
            break;
        case 'Cm':
            info = 'Cúrio é usado em fontes de energia para satélites!';
            break;
        case 'Bk':
            info = 'Berquélio é usado em pesquisas científicas!';
            break;
        case 'Cf':
            info = 'Califórnio é usado em detectores de metais e fontes de nêutrons!';
            break;
        case 'Es':
            info = 'Einstênio é usado em pesquisas científicas!';
            break;
        case 'Fm':
            info = 'Férmio é usado em pesquisas científicas!';
            break;
        case 'Md':
            info = 'Mendelévio é usado em pesquisas científicas!';
            break;
        case 'No':
            info = 'Nobélio é usado em pesquisas científicas!';
            break;
        case 'Lr':
            info = 'Laurêncio é usado em pesquisas científicas!';
            break;
        case 'Rf':
            info = 'Rutherfórdio é um elemento sintético usado em pesquisas!';
            break;
        case 'Db':
            info = 'Dúbnio é um elemento sintético usado em pesquisas!';
            break;
        case 'Sg':
            info = 'Seabórgio é um elemento sintético usado em pesquisas!';
            break;
        case 'Bh':
            info = 'Bóhrio é um elemento sintético usado em pesquisas!';
            break;
        case 'Hs':
            info = 'Hássio é um elemento sintético usado em pesquisas!';
            break;
        case 'Mt':
            info = 'Meitnério é um elemento sintético usado em pesquisas!';
            break;
        case 'Ds':
            info = 'Darmstádtio é um elemento sintético usado em pesquisas!';
            break;
        case 'Rg':
            info = 'Roentgênio é um elemento sintético usado em pesquisas!';
            break;
        case 'Cn':
            info = 'Copernício é um elemento sintético usado em pesquisas!';
            break;
        case 'Nh':
            info = 'Nihônio é um elemento sintético usado em pesquisas!';
            break;
        case 'Fl':
            info = 'Fleróvio é um elemento sintético usado em pesquisas!';
            break;
        case 'Mc':
            info = 'Moscóvio é um elemento sintético usado em pesquisas!';
            break;
        case 'Lv':
            info = 'Livermório é um elemento sintético usado em pesquisas!';
            break;
        case 'Ts':
            info = 'Tenessino é um elemento sintético usado em pesquisas!';
            break;
        case 'Og':
            info = 'Oganessônio é um elemento sintético usado em pesquisas!';
            break;
        default:
            info = 'Elemento não encontrado.';
    }
    
    infoText.innerText = info;
 
}

function hideInfo() {
    const popup = document.getElementById('element-info-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

function showFullTable() {
    document.getElementById('full-table-container').style.display = 'flex';
}

function hideFullTable() {
    document.getElementById('full-table-container').style.display = 'none';
}
