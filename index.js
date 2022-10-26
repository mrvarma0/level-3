const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }

    const overdue = function()  {
        var k;
        var overdue_list = [];
        for (k in all) {
            if (all[k].dueDate < today) {
                overdue_list.push(all[k]);
            }
        }
        return overdue_list;
    }

    const dueToday = function() {
        var k;
        var dueToday_list = [];
        for (k in all) {
            if (all[k].dueDate === today) {
                dueToday_list.push(all[k]);
            }
        }
        return dueToday_list;
    }

    const dueLater = function() {
        var k;
        var dueLater_list = [];
        for (k in all) {
            if (all[k].dueDate > today) {
                dueLater_list.push(all[k]);
            }
        }
        return dueLater_list;
    }

    const toDisplayableList = function(list) {
        var k;
        var displayList = []
        for (k = 0; k < list.length; k++) {
            if (list[k].completed === false) {
                //`[ ] ${i.title} ${i.dueDate}`
                if (list[k].dueDate === today) {
                    displayList.push(`[ ] ${list[k].title}`)
                }
                else {
                    displayList.push(`[ ] ${list[k].title} ${list[k].dueDate}`)
                }
            }
            else {
                // `[x] ${i.title} ${i.dueDate}`
                if (list[k].dueDate === today) {
                    displayList.push(`[x] ${list[k].title}`)
                }
                else {
                    displayList.push(`[x] ${list[k].title} ${list[k].dueDate}`)
                }
            }
        }

        return displayList.join("\n");
    }

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}
const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")