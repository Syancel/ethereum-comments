import Button from 'react-bootstrap/Button';

const ConnectWalletButton = (props) => {
    return(
        <Button variant="outline-primary" id="connectWalletButton" onClick={props.onWalletConnectPressed}>
            {props.walletAddress.length > 0 ? (
                "Connected: " +
                String(props.walletAddress).substring(0, 6) +
                "..." +
                String(props.walletAddress).substring(38)
            ) : (
                <span>Connect Wallet</span>
            )}
        </Button>
    );
}

export default ConnectWalletButton;