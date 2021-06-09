import ConnectWalletButton from './ConnectWalletButton';
import Comment from './Comment';

import {
    connectWallet,
    getCurrentWalletConnected,
    loadComments,
    addComment
} from '../util/interact';

import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';

const CommentSection = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [status, setStatus] = useState("");
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(async () => {
        const { address, status } = await getCurrentWalletConnected();
        setWalletAddress(address);
        setStatus(status);
        addWalletListener();
    }, []);

    const onWalletConnectPressed = async () => {
        const { address, status } = await connectWallet();
        setWalletAddress(address);
        setStatus(status);
    }

    const onAddCommentPressed = async () => {
        // TODO: Implement
    }

    const addAddedCommentListener = () => {
        // TODO: Implement
    }

    const addWalletListener = () => {
        if(window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if(accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setStatus("");
                } else {
                    setWalletAddress("");
                    setStatus("🦊 Connect to Metamask using the top-right button.");
                }
            });
        } else {
            setStatus("🦊 Please install Metamask.");
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{ offset: 8 }}>
                    <ConnectWalletButton 
                        onWalletConnectPressed={onWalletConnectPressed}
                        walletAddress={walletAddress}
                    ></ConnectWalletButton>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 2 }}>
                    <FormControl 
                        type="text"
                        placeholder="Write something..."
                        onChange={(e) => setNewComment(e.target.value)}
                    ></FormControl>
                </Col>
                <Col>
                    <Button id="addCommentButton" onClick={onAddCommentPressed}>
                        Add Comment
                    </Button>
                </Col>
            </Row>
            {comments.length > 0 
            ? comments.map((comment, index) => {
                <Comment key={index} comment={comment}></Comment>
            }) 
            : (
                <Row>
                    <Col md={{ offset: 5 }}>No comments yet.</Col>
                </Row>
            )} 
        </Container>
    );
}

export default CommentSection;