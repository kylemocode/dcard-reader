import React, { useEffect, useState } from 'react'
import Modal from "react-modal"
import axios from 'axios';

import LoadingPlaceHolder from '../LoadingPlaceHolder';
import { S } from './style';
import { DCARD_SINGLE_POST_BASE_URL } from '../../constant/api';
import './modal.css';

interface props {
	isOpen: boolean;
	onRequestClose: any;
	postId: number | null;
}

const PostModal: React.FC<props> = ({ isOpen, onRequestClose, postId }) => {
	const [postData, setPostData] = useState({ title: '', content: '' });
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		Modal.setAppElement('body');
	}, [])

	useEffect(() => {
		if (postId) {
			setIsLoading(true)
			axios.get(DCARD_SINGLE_POST_BASE_URL + postId)
				.then((res) => setPostData({ title: res.data.title, content: res.data.content }))
				.then(() => setIsLoading(false))
		}
	}, [postId])

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Modal"
			className={{
				base: 'modal-base',
				afterOpen: 'modal-base_after-open',
				beforeClose: 'modal-base_before-close'
			}}
			overlayClassName={{
				base: 'overlay-base',
				afterOpen: 'overlay-base_after-open',
				beforeClose: 'overlay-base_before-close'
			}}
			shouldCloseOnOverlayClick={true}
			closeTimeoutMS={0}
		>
			{isLoading ? <LoadingPlaceHolder /> :
				<>
					<S.PostTitle>{postData.title}</S.PostTitle>
					<S.PostContent>{postData.content}</S.PostContent>
					<br></br>
					<S.PostButton onClick={onRequestClose}>退出</S.PostButton>
				</>}
		</Modal>
	)
}

export default PostModal;