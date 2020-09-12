class AddLikeToTodoItems < ActiveRecord::Migration[6.0]
  def change
    add_column :todo_items, :like, :boolean, default: false
  end
end
