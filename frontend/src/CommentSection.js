import React, { useEffect, useState } from "react";

const CommentSection = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [status, setStatus] = useState("");
    const [comments, setComments] = useState("No connection to the network");
    const [newComment, setNewComment] = useState("");

    useEffect(async () => {

    }, []);

    const onWalletConnectPressed = async () => {
        // TODO: Implement
    }

    const onAddCommentPressed = async () => {
        // TODO: Implement
    }

    function addAddedCommentListener() {
        // TODO: Implement
    }

    return (
        <div id="container">
            <button id="connectWalletButton" onClick={onWalletConnectPressed}>
                {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                ) : (
                    <span>Connect Wallet</span>
                )}
            </button>

            <input 
                type="text"
                placeholder="Add comment"
                onChange={(e) => setNewComment(e.target.value)}
            ></input>

            <button id="addCommentButton" onClick={onAddCommentPressed}>
                Add Comment
            </button>
        </div>
    );
}

export default CommentSection;