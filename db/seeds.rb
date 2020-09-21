2.times do |i|
  User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
end

User.all.each do |u|
  10.times do |i|
      u.todo_items.create(title: "To Do Item #{i+1} for #{u.email}", complete: i % 3  == 0 ? true : false  )
  end
end
10.times do |i|
  Comment.create!(
    text: "コメント#{i + 1}",
    date: Time.zone.local(2020, 8, 28).since(i.days)
  )
end
