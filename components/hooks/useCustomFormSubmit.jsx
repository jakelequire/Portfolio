


export default function useCustomFormSubmit() {
    const [formSubmit, setFormSubmit] = useState(false);
    const ref = useRef(null);
    
    const handleSubmit = () => setFormSubmit(true)
    
    useEffect(() => {
        const node = ref.current;

        if (node) {
        node.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(node);
            const data = Object.fromEntries(formData);
            try {
                const response = await fetch('http://localhost:3001/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        });

        return () => {
            node.removeEventListener('submit', handleSubmit);
        };
        }
    }, []);
    
    return [formSubmit, ref];
}