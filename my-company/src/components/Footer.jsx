function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f1f1f1',
      padding: '10px',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
