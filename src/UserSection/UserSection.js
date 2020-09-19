import React from 'react';
import User from '../user/User';
import classes from './UserSection.module.css';
export default function UsersSection() {
  const UserArr = [
    {
      id: 1,
      title: 'Dmm design',
      status: false,
      date: '20 Dec',
    },
    {
      id: 2,
      title: 'Blurr animation',
      status: true,
      date: '22 Dec',
    },
    {
      id: 3,
      title: 'Illustration',
      status: false,
      date: '26 Dec',
    },
    {
      id: 4,
      title: 'Refunds',
      status: false,
      date: '28 Dec',
    },
  ];
  return (
    <div className={classes.UserWrap}>
      {UserArr.map((item) => {
        return (
          <div key={item.id} className={classes.User}>
            <User
              id={item.id}
              title={item.title}
              isActive={item.status}
              date={item.date}
            />
          </div>
        );
      })}
    </div>
  );
}
