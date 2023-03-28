    'use strict';

    document.addEventListener("DOMContentLoaded", () => {

        var newTodo = document.querySelector(".new-todo")
        var todoList = document.querySelector(".todo-list")
    
        console.log(newTodo)

        /*Add new ToDo to list*/

        newTodo.addEventListener("keypress", (e) => {
            if(e.key === "Enter") {
        
                // Create new list button
                const BtnElement = document.createElement("button")
                BtnElement.classList.add("destroy")
        
                // create new list label
                const labelElement = document.createElement('label')
                labelElement.innerHTML = newTodo.value
        
                // create new list input
                const inputElement = document.createElement('input')
                inputElement.classList.add("toogle")
                inputElement.setAttribute("type", "checkbox")
        

                //Create list wrap and append all Elements
                const toDoWrapElement = document.createElement("div")
                toDoWrapElement.classList.add("view")
                toDoWrapElement.appendChild(inputElement)
                toDoWrapElement.appendChild(labelElement)
                toDoWrapElement.appendChild(BtnElement)
        
                const newTodoElement = document.createElement("li")
                newTodoElement.appendChild(toDoWrapElement)
        
                todoList.appendChild(newTodoElement)

                //empty input after press enter
                newTodo.value = ""
        

                // add event listener to the destroy button
                BtnElement.addEventListener("click", () => {
                const todoItem = BtnElement.parentNode.parentNode
                todoList.removeChild(todoItem)
                })


                // add event listener to the new checkbox
                inputElement.addEventListener("change", () => {
                    const todoItem = inputElement.parentNode.parentNode
                    if (inputElement.checked) {
                    todoItem.classList.add("completed")
                    } else {
                    todoItem.classList.remove("completed")
                    }
                })
            }
        })
    

        // add event listeners to all destroy buttons

        const destroyBtns = document.querySelectorAll(".destroy")

        destroyBtns.forEach(destroyBtn => {
            destroyBtn.addEventListener("click", () => {
                const todoItem = destroyBtn.parentNode.parentNode
                todoList.removeChild(todoItem)
            })
        })


        // add event listeners to all checkboxes

        const checkboxBtns = document.querySelectorAll(".toogle")

        checkboxBtns.forEach(checkboxBtn => {
            checkboxBtn.addEventListener("change", () => {
            const todoItem = checkboxBtn.parentNode.parentNode
                if (checkboxBtn.checked) {
                    todoItem.classList.add("completed")
                } else {
                    todoItem.classList.remove("completed")
                }
            })
        })


        // clear all completed toDos on clear button

        
    });