// <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&controls=${controls}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
define`
	<fm-selection video-id="">
		<style>
		section {
			border-radius: var(--radius-2);
			box-shadow: var(--shadow-2);
			width: 300px;
			background: red;
		}
		iframe {
			width: 100%;
		}
		</style>
		<section>
			<iframe src="https://www.youtube.com/embed/${'video-id'}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</section>
		<script>
		</script>
	</fm-selection>
`;
