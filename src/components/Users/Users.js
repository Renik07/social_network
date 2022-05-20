import React from 'react';
import style from './Users.module.css';
import userAvatar from '../../assets/images/avatar.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {

	let pages = Math.ceil(props.totalUsersCount / props.pageSize);
	let arrPages = [];

	for (let i = 1; i <= pages; i++) {
		arrPages.push(i);
	}

	let curP = props.currentPage;
	let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
	let curPL = curP + 4;
	let slicedPages = arrPages.slice( curPF, curPL);

	return (
		<div className={style.container}>
			<h2 className={style.title}>Profiles</h2>
			<div className={style.paginationWrapper}>
				{ slicedPages.map(p => {
					return (
						<span className={props.currentPage === p ? style.selectedPage : style.buttonPage} onClick={ () => {props.onPageChanged(p)} }>{ p }  </span>
					)
				}) }
			</div>
			
			{ props.isFetchingPreloader ? <Preloader />	: null }
			
			<div className={style.wrapper}>
				{ 
					props.users.map(user => <div className={style.userCard} key={user.id}>
						<div className={style.userInfo}>
							<img className={style.image} src={ user.photos.small != null ? user.photos.small : userAvatar } alt="" />
							<h3 className={style.fullName}>{ user.name }</h3>
							<h4 className={style.profession}>{ user.profession }</h4>
							{ user.followed 
								? <button disabled={props.followingInProgress.some(id => id === user.id)} className={style.buttonUnfollow} onClick={() => usersAPI.unfollow(user, props.unfollow, props.toggleFollowingProgress) }>Unfollow</button> 
								: <button disabled={props.followingInProgress.some(id => id === user.id)} className={style.buttonFollow} onClick={() => usersAPI.follow(user, props.follow, props.toggleFollowingProgress) }>Follow</button> 
							}
						</div>
						<NavLink className={style.userLink} to={`/userprofile/${user.id}`}>View Profile</NavLink>
					</div>
					) 
				}
			</div>
		</div>
	)
}

export default Users;