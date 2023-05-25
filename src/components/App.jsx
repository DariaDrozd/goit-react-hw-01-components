import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile';
import data from 'data/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'data/friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import transactions from 'data/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
          marginBottom: '50px',
          marginTop: '50px',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
