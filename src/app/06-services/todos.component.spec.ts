import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from the server', () => {
    const todos = [1, 2, 3];
    // puts a spy on a method in a class
    // With that spy, we can check if that method has been called
    // we can change the implementation of that method
    // we can return a different value or throw an error

    // callFake, changes the implementation of the method
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(todo => {
      return of(null);
    });

    component.add();

    expect(spy).toHaveBeenCalled(); // tests that service add method was called from component add method
  });

  it('should add the new todo returned from the server', () => {
    let todo = {id: 1};
    // const spy = spyOn(service, 'add').and.callFake(todo => {
    //   return from([ todo ]);
    // });
    // OR
    const spy = spyOn(service, 'add').and.returnValue(from([ todo ]));

    component.add();

    expect(component.todos.findIndex(t => t.id === todo.id)).toBeGreaterThan(-1);
  });

  it('should set message property if server returns and error when adding a new todo', () => {
    const errorMsg = 'Error adding todo';
    const spy = spyOn(service, 'add').and.returnValue(throwError(errorMsg));
    // const spy = spyOn(service, 'add').and.throwError(errorMsg);

    component.add();

    expect(component.message).toBe(errorMsg);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    // override window.confirm method to return true
    spyOn(window, 'confirm').and.returnValue(true);
    // override delete method to return empty response
    const spy = spyOn(service, 'delete').and.returnValue(of(null));

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    // override window.confirm method to return true
    spyOn(window, 'confirm').and.returnValue(false);
    // override delete method to return empty response
    const spy = spyOn(service, 'delete').and.returnValue(of(null));

    expect(spy).not.toHaveBeenCalled();
  });
});