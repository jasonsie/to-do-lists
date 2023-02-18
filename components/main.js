import css from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';
import { getLists, createItem, deleteItem, updateItem } from '@/utilis/firebaseAction';
import Image from 'next/image';

const Main = (props) => {
  const { userData } = props;
  const [lists, setLists] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [user, setUser] = useState({});

  function actEditItem(id, e) {
    e.stopPropagation();
    updateItem(
      user.id,
      id,
      lists.find((each) => each.id === id),
    );
    setLists((pre) => pre.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)));
  }

  function actDelete(id, e) {
    e.stopPropagation();
    deleteItem(user.id, id);
    setLists((pre) => pre.filter((i) => i.id !== id));
  }

  function actCreate(e) {
    if (e.which === 13) {
      const appendItem = { name: newItem, checked: false };
      const item = createItem(user.id, appendItem);
      item
        .then((res) => {
          setLists((pre) => {
            return [res, ...pre];
          });
          setNewItem('');
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    if (Object.keys(userData).length) {
      const initList = getLists(userData);
      initList.then((res) => setLists(res)).catch((err) => console.log(err));
      setUser(userData);
    }
  }, [userData]);

  return (
    <>
      <div className={css.toDoCon}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>TO DO LIST</h2>
          <div className={css.profile}>
            <Image fill alt="no image" src={user.image} />
          </div>
        </div>
        <main className={css.main}>
          {lists.map((i) => (
            <>
              <ul id={i.id} className={css.item} onClick={(e) => actEditItem(i.id, e)}>
                <i className={i.checked ? css.undone : css.done}>
                  <input value={i.checked} type="checkbox"></input>
                </i>
                <span className={i.checked ? css.itemCtx_done : css.itemCtx_undone}>{i.name}</span>
                <div className={css.delete} onClick={(e) => actDelete(i.id, e)}>
                  <div>-</div>
                </div>
              </ul>
            </>
          ))}
        </main>
        <header>
          <input
            className={css.newItem}
            type="text"
            placeholder="Write new item and hit 'Enter'..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => actCreate(e)}
          />
        </header>
        <footer className={css.footer}>
          <a className={css.clear}>{`${lists.filter((i) => i.checked === false).length} To DO`}</a>
          <div className={css.completed}>{`${
            lists.filter((i) => i.checked === true).length
          } Completed`}</div>
        </footer>
      </div>
    </>
  );
};

export default Main;
