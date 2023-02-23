addToBody.id = 0
var currOpen = undefined
var titleClicked = undefined
var deleted = []
var body = document.getElementsByTagName('body')[0]
var addList = document.getElementById('add')
var hiddenBox = document.getElementById('hiddenBox')
var main = document.getElementsByClassName('main')[0]
var add = document.getElementById('addList')
var close = document.getElementById('cancelList')
var cardFlex = document.getElementById('cardFlex')
var hiddenBox2 = document.getElementById('hiddenBox2')
var addList2 = document.getElementById('addList2')
var close2 = document.getElementById('cancelList2')
var backAll = document.getElementById('back')
var addEventsId = []
var prev = 0
var liId = 0

function checkAfter(element)
{
	for (let i=0;i<addEventsId.length;i++)
	{
		if(document.getElementById('close'+addEventsId[i]).children[0]==element)
		{
			eventToDelete(element)
			break;

		}
	}

    for (let i=0;i<addEventsId.length;i++)
    {
        if(document.getElementById('add'+addEventsId[i])==element)
        {
            eventToAdd(element)
            break;

        }
    }



    for (let i=0;i<addEventsId.length;i++)
    {
        if(document.getElementById('title'+addEventsId[i])==element)
        {
            getId(element)
            break;

        }
    }


    for (let i=0;i<liId;i++)
    {
        if(document.getElementById('li'+i)==element)
        {
            under(element)
            break;

        }
    }

}

function reverse() {
    for (let i = 0; i < addToBody.id; i++) {
        let con = 1

        for (let j = 0; j < deleted.length; j++) {
            if (`${deleted[j]}` === `card${i}`) {
                con = 0
                break
            }

        }

        if (con) {
            document.getElementById(`card${i}`).style.display = 'block'

        }

    }
    document.getElementById('nav').style.display = 'flex'
    document.getElementById('back').style.display = 'none'
}


function hideEverything() {
    for (let i = 0; i < addToBody.id; i++) {
        if (i != titleClicked) {
            document.getElementById(`card${i}`).style.display = 'none'
        }
    }

}

function getId(obj) {
    titleClicked = parseInt(obj.parentNode.id.slice(4))
    document.getElementById('nav').style.display = 'none'
    document.getElementById('back').style.display = 'block'

    hideEverything()
}

function under(obj) {
    if (obj.style.textDecoration != 'line-through rgb(111, 114, 247)') {
        obj.style.textDecoration = 'line-through'
        obj.style.textDecorationColor = '#6f72f7'

    } else {
        obj.style.textDecoration = 'none'
    }

}


function getList() {
    let value = document.getElementById('listName2').value
    if (value != '') {
        let li = currOpen.parentNode.parentNode.children[0]
        li.innerHTML += `<li id='li${liId}'>${value}</li>`
        document.getElementById('listName2').value = ''

        liId+=1
        closeHidden(hiddenBox2)
    }
}

function eventToAdd(obj) {

    hiddenBox2.style.display = 'block'
    main.style.filter = 'blur(100px)'
    copen = 1
    open2 = 1
    currOpen = obj
}


function eventToDelete(ele) {
    ele.parentNode.parentNode.style.display = 'none'
    deleted.push(ele.parentNode.parentNode.id)

}


function addToBody() {
    let title = document.getElementById('listName').value
    if (title != '') {
        var card = `
			<div class="card" id = 'card${addToBody.id}'>

				<div id='title${addToBody.id}'class='title' style='height: 10%;'>
					${title}
				</div>

				<div style='height: 90%;'>
					<div class='content' id='content${addToBody.id}'>
						
					</div>
					<div class='delAddItem'>
						
							
							<div id='add${addToBody.id}' style='width:100%' class='addList'>
									Add
							</div>

					</div>

				</div>
				<div class='closeList' id='close${addToBody.id}' >
					<span class="material-symbols-outlined cross">
					close
				</span>
				</div>
			</div>

			`
		addEventsId.push(addToBody.id)
        cardFlex.innerHTML += card
        addToBody.id += 1
        closeHidden(hiddenBox)
        document.getElementById('listName').value = ''

    }
}

setInterval(()=>{checkAfter()},100)

function closeHidden(obj) {
    main.style.filter = 'blur(0px)'
    obj.style.display = 'none'
}


function addNew() {
    main.style.filter = 'blur(100px)'
    hiddenBox.style.display = 'block'
    open = 1
}

document.addEventListener('click',()=>{checkAfter(event.target)})

addList.addEventListener('click', addNew)
addList2.addEventListener('click', getList)

add.addEventListener('click', addToBody)

close.addEventListener('click', () => closeHidden(hiddenBox))
close2.addEventListener('click', () => closeHidden(hiddenBox2))

backAll.addEventListener('click', reverse)