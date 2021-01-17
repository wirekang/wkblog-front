import React from 'react';
import cn from 'classnames';
import useTodoActions from 'hooks/useTodoActions';
import { Todo } from 'modules/todos';
import styles from './TodoItem.module.scss';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li className={cn(styles.TodoItem, { [styles.done]: todo.done })}>
      <span
        className={cn(styles.text)}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={onToggle}
      >
        {todo.text}
      </span>
      <input type="button" className={cn(styles.remove)} onClick={onRemove} value="X" />
    </li>
  );
}

export default TodoItem;
